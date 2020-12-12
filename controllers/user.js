const userService = require('../services/users');
const { au, sc, rm } = require('../modules/utils');

exports.login = async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const userInfo = await userService.login({ email, pwd });
    userInfo ? res.status(sc.OK).send(au.successTrue(rm.LOGIN_SUCCESS)) : res.status(sc.BAD_REQUEST).send(au.successFalse(rm.LOGIN_FAIL));
  } catch (err) {
    throw err;
  }
};
