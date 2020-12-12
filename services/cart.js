const { Cart } = require('../models/index');

exports.getCart = async (data) => {
  try {
    const cartInfo = await Cart.findAll({
      where: { id: { in: [1, 2, 3, 4] } },
    });

    return cartInfo.dataValues;
  } catch (err) {
    throw err;
  }
};
