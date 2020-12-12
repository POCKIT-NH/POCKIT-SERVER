const { User } = require('../models/index');

exports.login = async (data) => {
  try {
    const loginCheck = await User.findOne({ where: { email: data.email } });
    return loginCheck.dataValues ? true : false;
  } catch (err) {
    throw err;
  }
};
