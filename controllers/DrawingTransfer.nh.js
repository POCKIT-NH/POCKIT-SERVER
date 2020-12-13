// param

// Example Value
// Model
// {
//   "Header": {
//     "ApiNm": "DrawingTransfer",
//     "Tsymd": "오늘날짜를입력하세요",
//     "Trtm": "112428",
//     "Iscd": "기관코드를입력하세요",
//     "FintechApsno": "001",
//     "ApiSvcCd": "DrawingTransferA",
//     "IsTuno": "0000",
//     "AccessToken": "인증키를입력하세요"
//   },
//   "FinAcno": "핀어카운트",
//   "Tram": "거래금액",
//   "DractOtlt": "출금계좌인자내용"
// }




// 거래조회내역 -> "TotCnt": "1",

// {
//   "Header": {
//     "ApiNm": "InquireTransactionHistory",
//     "Tsymd": "20201213",
//     "Trtm": "112428",
//     "Iscd": "000642",
//     "FintechApsno": "001",
//     "ApiSvcCd": "ReceivedTransferA",
//     "IsTuno": "00001513",
//     "AccessToken": "08951f2a4a58e3fb56a50ca33bc9f5c6d71773c57b9662e9979964780d8fa86c"
//   },
//   "Bncd": "011",
//   "Acno": "3020000002704",
//   "Insymd": "20201210",
//   "Ineymd": "20201213",
//   "TrnsDsnc": "A",
//   "Lnsq": "DESC",
//   "PageNo": "1",
//   "Dmcnt": "100"
// }


// 응답
// {
//   "REC": [
//     {
//       "AftrBlnc": "999987010",
//       "TrnsAfAcntBlncSmblCd": "+",
//       "BnprCntn": "포킷",
//       "Txtm": "163826",
//       "Tuno": "13007",
//       "Trdd": "20201211",
//       "Smr": null,
//       "Ccyn": "0",
//       "MnrcDrotDsnc": "3",
//       "Tram": "12990",
//       "HnisCd": "000",
//       "HnbrCd": "0000000"
//     }
//   ],
//   "CtntDataYn": "N",
//   "Header": {
//     "Trtm": "112428",
//     "Rsms": "정상처리 되었습니다.",
//     "ApiNm": "InquireTransactionHistory",
//     "IsTuno": "00001513",
//     "Tsymd": "20201213",
//     "FintechApsno": "001",
//     "Iscd": "000642",
//     "Rpcd": "00000",
//     "ApiSvcCd": "ReceivedTransferA"
//   },
//   "TotCnt": "1",
//   "Iqtcnt": "1"
// }
