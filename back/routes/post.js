const express = require("express");
const router = express.Router();
const { Post } = "../models";
const { isLoggedIn } = require("./middlewares");

// POST /post
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }

  // res.json({ id: 1, content: "hello" });
});

//POST /post/1/comment
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
    return res.status(201).json(comment);
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
