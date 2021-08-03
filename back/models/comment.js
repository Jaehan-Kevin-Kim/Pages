const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        //id가 기본적으로 들어있고, 자동으로 생성 됨.
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      // UserId: 1
      // PostId: 3
      {
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //한글 사용 가능, 이모티콘 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

/*
(sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment', // MySQL에는 comments 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // UserId: 1
      // PostId: 3
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', //한글 사용 가능
    }
  );
  Comment.associate = (db) => {
  db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
*/
