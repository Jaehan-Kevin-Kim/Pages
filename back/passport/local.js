const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email: email },
          });
          if (!user) {
            // server error / success / client error
            return done(null, false, { reason: "The email is not registered." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "password is not matched" });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
