const { Product } = require('../models/index');

exports.getProductDetail = async (productIdx) => {
  try {
    const product = await Product.findAll({
      attributes: ['idx', 'title', 'product_img', 'price'],
      where: { idx: productIdx },
    });
    return product;
  } catch (err) {
    throw err;
  }
};
