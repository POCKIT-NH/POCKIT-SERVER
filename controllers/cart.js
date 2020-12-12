const cartService = require('../services/cart');
const { au, sc, rm } = require('../modules/utils');

/**
 * cart 정보 불러오기
 */
exports.getCart = async (req, res) => {
  const { email, pwd } = req.body;

  try {
    const todayInfo = await cartService.getTodayProduct({ email, pwd });

    todayInfo
      ? res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, todayInfo))
      : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};

/**
 * cart에 들어갈 상품 정보 DB에 저장
 */
exports.pushCart = async (req, res) => {
  const { email, pwd } = req.body;

  try {
    const todayInfo = await cartService.getTodayProduct({ email, pwd });

    todayInfo
      ? res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, todayInfo))
      : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};
