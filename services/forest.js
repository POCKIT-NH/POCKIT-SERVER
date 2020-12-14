const { User } = require('../models/index');

exports.point = async (totalCnt) => {
  try {
    // point 저장하기
    const user = await User.findOne({ where: { idx: 1 } });
    const point = user.point;

    if (point != totalCnt) {
      // 값 변경이 있으면 업데이트하고 return;
      await User.update({ point: totalCnt }, { where: { idx: 1 } });
      return totalCnt;
    } else {
      return point;
    }
  } catch (err) {
    throw err;
  }
};
