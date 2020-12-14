const forestService = require('../services/forest');
const { au, sc, rm } = require('../modules/utils');
const axios = require('axios');
let rand = Math.random() * 200;
require('dotenv').config();

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  return year + month + day;
}

exports.forest = async (req, res) => {
  try {
    const result = await axios({
      method: 'post',
      url: 'https://developers.nonghyup.com/InquireTransactionHistory.nh',
      data: {
        Header: {
          ApiNm: 'InquireTransactionHistory',
          Tsymd: getToday(),
          Trtm: '112428',
          Iscd: process.env.ISCD,
          FintechApsno: '001',
          ApiSvcCd: 'ReceivedTransferA',
          IsTuno: rand,
          AccessToken: process.env.ACCESS_TOKEN,
        },
        Bncd: '011',
        Acno: process.env.ACNO,
        Insymd: '20201210',
        Ineymd: getToday(),
        TrnsDsnc: 'A',
        Lnsq: 'DESC',
        PageNo: '1',
        Dmcnt: '100',
      },
    });
    const totalCnt = parseInt(result.data.TotCnt);
    const rate = parseInt(totalCnt) * 0.08;
    const point = Math.ceil(totalCnt + rate);
    console.log(result);

    const total = await forestService.point(point);
    total == false ? res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NO_CHANGE)) : res.status(sc.OK).send(au.successTrue(rm.DB_SUCCESS, total));
  } catch (err) {
    throw err;
  }
};
