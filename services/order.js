const { now } = require('sequelize/types/lib/utils');
const { Order } = require('../models/index');
let rand = Math.random() * 1000;

exports.orderInfo = async (name, phone, addr) => {
  try {
    // name, phone, addr, isPay, order_num, order_date, total, isCart
    const result = await Order.update(
      {
        name: name,
        phone: phone,
        addr: addr,
        isPay: 1,
        order_num: rand,
        order_date: now(),
        isCart: 0,
      },
      // { fields: ['name', 'phone', 'addr', 'isPay', 'order_num', 'order_date', 'total', 'isCart', 'user_idx'] },
      { where: { idx: 1 } }
    );
    return result;
  } catch (err) {
    throw err;
  }
};
