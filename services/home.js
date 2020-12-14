const { Product } = require('../models/index');

exports.getTodayProduct = async (data) => {
  try {
    const todayProduct = await Product.findAll({
      where: { idx: [1, 2, 3, 4] },
    });

    let todayArray = new Array();

    todayProduct.map(async (product) => {
      todayArray.push(product.dataValues);
    });

    return todayArray[0] ? todayArray : undefined;
  } catch (err) {
    throw err;
  }
};
