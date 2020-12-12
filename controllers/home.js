const homeService = require('../services/home');
const { au, sc, rm } = require('../modules/utils');

exports.today = async (req, res) => {
  try {
    const todayInfo = await homeService.getTodayProduct();

    todayInfo
      ? res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, todayInfo))
      : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));
  } catch (err) {
    throw err;
  }
};

exports.recommend = async (req, res) => {
  try {
  } catch (err) {
    throw err;
  }
};
