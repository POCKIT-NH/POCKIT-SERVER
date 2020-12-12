const { Product } = require('../models/index');

exports.getTodayProduct = async (data) => {
  try {
    const todayProduct = await Product.findAll({
      where: { id: { in: [1, 2, 3, 4] } },
    });

    return todayProduct.dataValues;
  } catch (err) {
    throw err;
  }
};
