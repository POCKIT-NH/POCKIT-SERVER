// 사진, 상품명. 가격만.
const detailService = require('../services/detail');
const { au, sc, rm } = require('../modules/utils');

exports.detail = async (req, res) => {
  const productIdx = req.query.idx;
  try {
    const productInfo = await detailService.getProductDetail(productIdx);
    productInfo ? res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, productInfo)) : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};
