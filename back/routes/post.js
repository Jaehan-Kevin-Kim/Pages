const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");
const hashtag = require("../models/hashtag");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads folder is not exist. uploads folder will be created");
  fs.mkdirSync("uploads");
}

//POST /post/images
// multer는 form 마다 세팅이 다르기 때문에 아래와 같이 router마다 별도의 세팅을 해 줘야 함.
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ca-central-1",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "pages-s3",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB로 파일사이즈 제한
});

/*
const upload = multer({
  //storage: 어디다 저장할지?
  storage: multer.diskStorage({
    // diskStorage: Local hard-disk에 저장
    destination(req, file, done) {
      done(null, "uploads"); //uploads라는 folder에 저장 함.
    },
    filename(req, file, done) {
      // 파일이름은 조금 복잡한 이유가 보통 node의 경우 파일이름이 같은경우 덮어씌워버림. 따라서 만약 뒤에 사진을 올린사람의 파일명이 이전에 올린사람의 파일명과 같으면 처음 올렸던 사진이 삭제되면서 덮어 씌워 줌. 이러한 현상을 방지하기 위해 파일명 뒤에 작성 시간을 같이 넣어주기 위해 아래와 같은 방법 사용
      // 예시: 파일이름이 node.png 인 경우
      const ext = path.extname(file.originalname); //확장자 추출방법 (.png)
      const basename = path.basename(file.originalname, ext); // 확장자 제외 실제 파일 이름만 추출 (node)
      done(null, basename + "_" + new Date().getTime() + ext); // node_20210619.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB로 파일사이즈 제한
});
*/
// POST /post
router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )

        // hashtags.map((tag) => Hashtag.findOrCreate({ name: tag.slice(1).toLowerCase() }))
        // slice(1) 하는 이유: 앞에 # 기호 제거 해 주기 위해.
        // Hashtag.create : Hashtag db table에 값 추가 : 원래는 create로 하지만, 지금같은 경우는 만약에 하나의 hashtag 값이 등록이 되어있으면 추가로 등록 할 필요가 없음. 따라서 create대신 findOrCreate로 변경 (이거의 경우는 찾아보고 있으면 가져오고 없으면 등록하는 명령어)
      );
      await post.addHashtags(result.map((v) => v[0])); //이렇게 등록하는 이유는 위와 같이 findOrCreate를 쓰면 결과값이 배열형태로 [[node, true], [express, true]]이런식으로 저장 됨. 그러므로 위와 같은 방법으로 저장하면 됨.
    }

    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png] 와 같이 배열로 나옴
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        //이미지를 하나만 올리면 image: 제로초.png 와 같이 그냥 주소로 나옴
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }

    console.log("post in routes/post.js", post);
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    console.log("fullpost in routes/post.js", fullPost);
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }

  // res.json({ id: 1, content: "hello" });
});

/* 작동 안됨. 나중에 다시 보기
//POST /post/1/retweet
//:postId: Parameter: 주소부분에서 동적으로 바뀌는 부분을 parameter라고 부름.
router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("The post is not exist");
    }
    // 아래 if 설명: 자기 게시글을 자기가 리트윗 하는 경우 || 자기 게시글을 리트윗 한 다른 게시글을 다시 자기가 리트윗 하는 경우
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send("You are not allowed to retweet your post");
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("You already did retweet");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });
    const rewteetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        // {
        //   model: User,
        //   as: "Likers",
        //   atttributes: ["id"],
        // },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              mode: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(201).json(rewteetWithPrevPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
*/

router.get("/:postId", async (req, res, next) => {
  // GET /post/1
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//
router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
  // POST /post/1/retweet
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send("자신의 글은 리트윗할 수 없습니다.");
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 리트윗했습니다.");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//아래 middleware에서 uplaod.array('image')를 봤을때 array인 이유는 사진이 여러장 올라갈 거기 때문, 한장이면 single 쓰면 됨. 그리고 'image'는 front-end에서 사진을 올리는 input내의 tag name이 (name='image')이기 때문. 만약 image없이 text만 올리는 경우는 upload.none()하면 됨. 마지막으로 front-end에서 input이 여러개인 경우는 fields를 사용하면 됨.
router.post("/images", isLoggedIn, upload.array("image"), (req, res, next) => {
  console.log(req.files);
  // res.json(req.files.map((v) => v.filename));
  res.json(req.files.map((v) => v.location));
});

//POST /post/1/comment
//:postId: Parameter: 주소부분에서 동적으로 바뀌는 부분을 parameter라고 부름.
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("The post is not exist");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    console.log(comment);
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    console.log("Comment: \n", comment);
    console.log("Full Comment: \n", fullComment);
    res.status(201).json(fullComment);
  } catch (err) {
    console.error(err);
    next(err);
  }

  // res.json({ id: 1, content: "hello" });
});

// PATCH /post/1/like
router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("Post is not exist");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/1/like
router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("Post is not exist");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /post/1
router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId, UserId: req.user.id },
    });
    res.json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
