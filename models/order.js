const { User } = require('.');

const order_tb = (sequelize, DataTypes) => {
  return sequelize.define(
    'order_tb',
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      addr: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      isPay: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      order_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isCart: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      user_idx: {
        type: DataTypes.INTEGER,
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

module.exports = order_tb;
