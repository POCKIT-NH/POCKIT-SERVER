const cartService = require('../services/cart');
const { au, sc, rm } = require('../modules/utils');

/**
 * cart 정보 불러오기
 */
exports.getCart = async (req, res) => {
  try {
    const cartInfo = await cartService.getCart();

    cartInfo
      ? res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, cartInfo))
      : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};

/**
 * cart에 들어갈 상품 정보 DB에 저장
 */
exports.pushCart = async (req, res) => {
  const { count, product_idx } = req.body;

  if (!count || !product_idx) {
    return res.status(sc.BAD_REQUEST).send(au.successFalse(rm.NULL_VALUE));
  }

  try {
    const pushCheck = await cartService.pushCart({ count, product_idx });

    pushCheck
      ? res.status(sc.OK).send(au.successTrue(rm.DB_REGISTER_OK))
      : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};
