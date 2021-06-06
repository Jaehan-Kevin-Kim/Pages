const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  //session에 user.id 만 가지고 있을 수 있게 등록 하는 방법
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //위 id를 통해서 db로부터 user정보를 가져 옴 (login을 성공하고 그 다음 요청부터 매번 실행되어 user의 모든 정보를 DB로 부터 가져옴)
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  }); //위 id를 통해서 db로부터 user정보를 가져 옴

  local();
};
