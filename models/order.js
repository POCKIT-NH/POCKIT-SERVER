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
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      addr: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      isPay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cart_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
