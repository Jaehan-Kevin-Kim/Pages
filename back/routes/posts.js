const express = require("express");
const { Post, Image, User, Comment } = require("../models");
const { Op } = require("sequelize"); //to implement less than (Op: Operator)
const router = express.Router();

// GET /posts
router.get("/", async (req, res, next) => {
  try {
    const where = {};
    // if it's not the initial loading: (if it's an initial loading, the value will be zero)
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; // less than lastId
    }
    // console.log("where", where);

    const posts = await Post.findAll({
      where,
      limit: 10, //10개만 가져오기
      //   offset: 0, //0번 부터 위의 limit 갯수 까지 가져오기 (1~10번 게시글까지)
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        { model: Image },
        { model: Comment, include: [{ model: User, attributes: ["id", "nickname"] }] },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
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
      ],
    });
    // console.log("posts: ", posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
