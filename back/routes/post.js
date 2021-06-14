const express = require("express");
const router = express.Router();
const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

// POST /post
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
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
router.patch("/:postId/like", async (req, res, next) => {
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
router.delete("/:postId/like", async (req, res, next) => {
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

// DELETE /delete
router.delete("/", (req, res) => {
  // DELETE /post
  res.json([{ id: 1, content: "hello" }]);
});

module.exports = router;
