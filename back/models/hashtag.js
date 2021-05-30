module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag', // MySQL에는 hashtags 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      name: {},
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 사용 가능
    }
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};
