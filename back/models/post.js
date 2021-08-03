const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        //id가 기본적으로 들어있고, 자동으로 생성 됨.
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        //RetweetId
      },
      {
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User); //post.addUser, post.getUser, post.setUser(수정) //belongsTo라서 단수
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //post.addHashtags
    db.Post.hasMany(db.Comment); //post.addComments, post.getComments
    db.Post.hasMany(db.Image); //post.addImages, post.getImages //hasMany라서 복수
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // Like 관련 //post.addLikers가 생김 //post.removeLikers //belongsToMany라서 복수
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //post.addRetweet
  }
};
/*
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // MySQL에는 posts 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //post.addUser, post.getUser, post.setUser(수정) //belongsTo라서 단수
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //post.addHashtags
    db.Post.hasMany(db.Comment); //post.addComments, post.getComments
    db.Post.hasMany(db.Image); //post.addImages, post.getImages //hasMany라서 복수
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // Like 관련 //post.addLikers가 생김 //post.removeLikers //belongsToMany라서 복수
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //post.addRetweet
  };

  return Post;
};
*/
