const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const router = express.Router();

//Post /user/login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

//POST /user
router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      // where안에 조건 넣기(만약 db에서 기존 email값이 있으면 해당 값 출력, 없으면 null 출력 됨.)
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("The ID is already used.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12); //뒤에 숫자는 보통 10-12정도로 맞춤

    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");
    // res.send("ok");
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post("/user/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
