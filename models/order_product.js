const { Order, Product } = require('.');

const order_product_tb = (sequelize, DataTypes) => {
  return sequelize.define(
    'order_product_tb',
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_idx: {
        type: DataTypes.INTEGER,
        reference: {
          model: Product,
          key: 'idx',
        },
      },
      order_idx: {
        type: DataTypes.INTEGER,
        reference: {
          model: Order,
          key: 'idx',
        },
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = order_product_tb;
