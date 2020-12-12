const user_tb = (sequelize, DataTypes) => {
  return sequelize.define(
    'user_tb',
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      point: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = user_tb;
