const { Order, OrderProduct, Product } = require('../models/index');

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

exports.pushCart = async (data) => {
  try {
    const product_idx = await Product.findOne({ where: { idx: data.product_idx } });

    //order 테이블에 수량, 개수 삽입
    const newOrder = await Order.create({
      count: data.count,
      total: data.total,
    }).complete(function (err, result) {
      if (err) {
        return callback(0);
      } else {
        return callback(result.idx); // This is generate primary key.
      }
    });

    const product_idx = await Product.findOne({ where: { idx: data.product_idx } });

    //productIdx와 orderIdx를 orderProduct 테이블에 삽입
    const newOrderProduct = await OrderProduct.create({
      product_idx: product_idx,
      order_idx: order_idx,
    });

    const cartInfo = await Cart.findAll({
      where: { id: { in: [1, 2, 3, 4] } },
    });

    return cartInfo.dataValues;
  } catch (err) {
    throw err;
  }
};
