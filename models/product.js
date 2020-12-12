const product_tb = (sequelize, DataTypes) => {
  return sequelize.define(
    'product_tb',
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      product_img: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
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

module.exports = product_tb;
