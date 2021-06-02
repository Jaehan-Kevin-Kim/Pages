module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image', // MySQL에는 images 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 사용 가능
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
