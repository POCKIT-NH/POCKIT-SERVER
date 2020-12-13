const { Order, OrderProduct, Product } = require('../models/index');

exports.getCart = async (data) => {
  try {
    // orderProduct 테이블에서 order_idx인 값들을 가져온다.
    const orderProduct = await OrderProduct.findAll({
      where: { order_idx: 1 },
    });

    let result = {
      user_idx: 1,
      order_idx: 1,
      product: [],
      delivery_date: '2020-12-19',
      delivery_price: 3000,
    };

    orderProduct.map(async (product) => {
      const productInfo = await Product.findOne({
        where: { idx: product.dataValues.product_idx },
      });

      let countPrice = productInfo.dataValues.price * product.dataValues.count;
      productInfo.dataValues.price = countPrice;
      productInfo.dataValues.count = product.dataValues.count;

      result.product.push(productInfo.dataValues);
    });

    return result.product[0] ? result : undefined;
  } catch (err) {
    throw err;
  }
};

exports.pushCart = async (data) => {
  try {
    const oldOrder_idx = await Order.findOne({ where: { user_idx: 1, isCart: 1 } });
    if (oldOrder_idx.dataValues) {
      //order 테이블에 수량, 개수 삽입
      //productIdx와 orderIdx를 orderProduct 테이블에 삽입
      const newOrderProduct_idx = await OrderProduct.create({
        product_idx: data.product_idx,
        order_idx: oldOrder_idx.dataValues.idx,
        count: data.count,
      }).then(function (result) {
        return result.idx;
      });

      return newOrderProduct_idx ? true : false;
    } else {
      //order 테이블에 수량, 개수 삽입
      const newOrder_idx = await Order.create(
        {
          total: data.total,
          isCart: 1, //isCart: true로 삽입
          user_idx: 1, //user는 1로 고정
        },
        { fields: ['count', 'total', 'isCart'] }
      ).then(function (result) {
        return result.idx;
      });

      const newOrderProduct_idx = await OrderProduct.create({
        product_idx: data.product_idx,
        order_idx: newOrder_idx,
        count: data.count,
      }).then(function (result) {
        return result.idx;
      });

      return newOrderProduct_idx ? true : false;
    }
  } catch (err) {
    throw err;
  }
};
