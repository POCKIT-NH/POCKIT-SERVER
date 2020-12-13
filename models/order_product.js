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
        allowNull: false,
      },
      order_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count: {
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

module.exports = order_product_tb;
