module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', // MySQL에는 users 테이블 생성 됨
    {
      //id가 기본적으로 들어있고, 자동으로 생성 됨.
      email: {
        type: DataTypes.STRING(30), //TEXT로 하면 무제한 글자
        allowNull: false, //false면 필수 (not null)
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //false면 필수 (not null)
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, //false면 필수 (not null)
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 사용 가능
    }
  );
  User.associate = (db) => {};

  return User;
};
