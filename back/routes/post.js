const express = require("express");
const router = express.Router();
const { Post, Image, Comment } = require("../models");
const { isLoggedIn } = require("./middlewares");

// POST /post
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });
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
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }

  // res.json({ id: 1, content: "hello" });
});

// DELETE /delete
router.delete("/", (req, res) => {
  // DELETE /post
  res.json([{ id: 1, content: "hello" }]);
});

module.exports = router;
