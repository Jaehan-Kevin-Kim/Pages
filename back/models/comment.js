module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment', // MySQL에는 comments 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', //한글 사용 가능
    }
  );
  Comment.associate = (db) => {};
  return Comment;
};
