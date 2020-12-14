const paymentService = require('../services/payment');
const { au, sc, rm } = require('../modules/utils');
const axios = require('axios');
const nhConfig = require('../config/nhpay.json');
const { format, compareAsc } = require('date-fns');

//011 - 3020000003225
const userFinAccount = '00820100007500000000000005769';

// 012 - 3510000003226
const sellerFinAccount = '00820100007500000000000008838';

exports.readDepositor = async (req, res) => {
  const randIdForIsTuno = makeid(15);
  const result = await axios({
		url: 'https://developers.nonghyup.com/InquireDepositorAccountNumber.nh',
		method: "post",
		data: {
      Header: {
        ApiNm: 'InquireDepositorAccountNumber',
        Tsymd: '20201214',
        Trtm: '112428',
        Iscd: '000750',
        FintechApsno: '001',
        ApiSvcCd: 'DrawingTransferA',
        IsTuno: randIdForIsTuno,
        AccessToken: 'df9833734e6350c7aa4e2006cc0e888ccbd8575fc41e229a13aafbaf46029f0e'
      },
      Bncd: '011',
      Acno: '3020000003225'
		}
  }).catch(e=>{console.log('error : ', e)});
  
  console.log('result : ', result)
}

// 핀테크기업이 고객으로부터 직접 접수한 농협계좌에 대해 핀-어카운트 발급을 요청합니다.
exports.issueFinAccount = async (req, res) => {
  const {bankCode, account, birth} = req.body;
  try {
  const now = new Date();
  const date = format(now, 'yyyyMMdd');
  const time = format(now, 'kkmmss');
  var rand = makeid(15);

  const result = await axios({
		url: 'https://developers.nonghyup.com/OpenFinAccountDirect.nh',
		method: "post",
		data: {
      Header: {
        ApiNm: 'OpenFinAccountDirect',
        Tsymd: date,  // 전송일자
        Trtm: time,  // 전송시각
        Iscd: nhConfig.Iscd,
        FintechApsno: nhConfig.FintechApsno,
        ApiSvcCd: 'DrawingTransferA',
        IsTuno: makeid(15),
        AccessToken: nhConfig.AccessToken
      },
      DrtrRgyn: 'Y',
      BrdtBrno: birth || '19980812',
      Bncd: bankCode || '012',
      Acno: account || '3510000003226'
    }
  });

  rand = makeid(15);

  return await axios({
		url: 'https://developers.nonghyup.com/InquireDepositorAccountNumber.nh',
		method: "post",
		data: {
      Header: {
        ApiNm: 'InquireDepositorAccountNumber',
        Tsymd: '20201214',
        Trtm: '112428',
        Iscd: '000750',
        FintechApsno: '001',
        ApiSvcCd: 'DrawingTransferA',
        IsTuno: makeid(15),
        AccessToken: 'df9833734e6350c7aa4e2006cc0e888ccbd8575fc41e229a13aafbaf46029f0e'
      },
      Rgno: result.data.Rgno,
      BrdtBrno: birth || '19980812'
		}
  }).catch(e=>{console.log('error : ', e)})
  .then(r => {
    return res.status(sc.OK).send(au.successTrue(rm.ISSUE_FIN_ACCOUNT_SUCCESS, result.data));
  });
} catch (error) {
  console.log('error : ', error)
    return res.status(sc.INTERNAL_SERVER_ERROR).send(au.successFalse(rm.INTERNAL_SERVER_ERROR));
  }
}


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.withdrawNhpay = async (req, res) => {
  try {
    const {userFinAc, sellerBankCode, sellerAc, price, product} = req.body;
    if (!price)
      return res.status(sc.BAD_REQUEST).send(au.successFalse(rm.DB_NOT_MATCHED_ERROR));

  const now = new Date();
  const date = format(now, 'yyyyMMdd');
  const time = format(now, 'kkmmss');
  var randIdForIsTuno = makeid(15);
  const result = await axios({
    url: "https://developers.nonghyup.com/DrawingTransfer.nh",
    method: "post",
    data: {
      Header: {
        ApiNm: "DrawingTransfer",
        Tsymd: date, // 전송일자
        Trtm: time, // 전송시각
        Iscd: nhConfig.Iscd,
        FintechApsno: nhConfig.FintechApsno,
        ApiSvcCd: "DrawingTransferA",
        IsTuno: randIdForIsTuno,
        AccessToken: nhConfig.AccessToken,
      },
      FinAcno: userFinAc || userFinAccount,
      Tram: price,
      DractOtlt: "POKIT 결제 완료",
    },
  });
  if (result.status !== 200) {
    return res.status(sc.BAD_REQUEST).send(au.successFalse(result.Header.Rsms));
  }
  randIdForIsTuno = makeid(15);
  const result2 = await axios({
    url: "https://developers.nonghyup.com/ReceivedTransferAccountNumber.nh",
    method: "post",
    data: {
      Header: {
        ApiNm: "ReceivedTransferAccountNumber",
        Tsymd: date, // 전송일자
        Trtm: time, // 전송시각
        Iscd: nhConfig.Iscd,
        FintechApsno: nhConfig.FintechApsno,
        ApiSvcCd: "DrawingTransferA",
        IsTuno: randIdForIsTuno,
        AccessToken: nhConfig.AccessToken,
      },
        Bncd: sellerBankCode || '011',
        Acno: sellerAc || account,
        Tram: price,
        DractOtlt: 'POKIT - 판매 완료',
        MractOtlt: 'POKIT - 판매 완료'
    },
  });

  console.log('result2 : ', result2.data);
  return res.status(sc.OK).send(au.successTrue(rm.PAY_SUCCESS, result2.data));
  
  } catch (error) {
    console.log('error : ', error)
  }
}


const payAxios = (apiName, url, apiCode, data, callback) => {
  const now = new Date();
  const date = format(now, 'yyyyMMdd');
  const time = format(now, 'kkmmss');
  const randIdForIsTuno = makeid(15);
  
  data.Header = { 
    ApiNm: apiName,
    Tsymd: date,  // 전송일자
    Trtm: time,  // 전송시각
    Iscd: nhConfig.Iscd,
    FintechApsno: nhConfig.FintechApsno,
    ApiSvcCd: apiCode,
    IsTuno: randIdForIsTuno,
    AccessToken: nhConfig.AccessToken
  }

  return axios({
		url,
		method: 'post',
		data: data
  }).catch( e => {
    console.log('error : ', e)
  }).then(callback);
}