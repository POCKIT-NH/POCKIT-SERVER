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
    //order 테이블에 수량, 개수 삽입
    const newOrder_idx = await Order.create(
      {
        count: data.count,
        total: data.total,
        isCart: 1, //isCart: true로 삽입
        user_idx: 1, //user는 1로 고정
      },
      { fields: ['count', 'total', 'isCart'] }
    ).then(function (result) {
      return result.idx;
    });

    //productIdx와 orderIdx를 orderProduct 테이블에 삽입
    const newOrderProduct_idx = await OrderProduct.create({
      product_idx: data.product_idx,
      order_idx: newOrder_idx,
    }).then(function (result) {
      return result.idx;
    });

    return newOrderProduct_idx ? true : false;
  } catch (err) {
    throw err;
  }
};
