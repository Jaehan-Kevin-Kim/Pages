module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post', // MySQL에는 posts 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', //이모티콘 저장
    }
  );
  Post.associate = (db) => {};

  return Post;
};