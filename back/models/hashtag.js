module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag', // MySQL에는 hashtags 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', //한글 사용 가능
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
