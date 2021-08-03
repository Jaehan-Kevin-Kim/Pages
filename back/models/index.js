const Sequelize = require("sequelize");
const comment = require("./comment");
const hashtag = require("./hashtag");
const image = require("./image");
const user = require("./user");
const post = require("./post");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

/*
db.Comment = require("./comment")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
*/

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

//아래는 각각 table의 associate 실행 해 주는 부분

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
