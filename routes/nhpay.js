const express = require('express');
const router = express.Router();
const {issueFinAccount, withdrawNhpay} = require('../controllers/nhpay');


/**
 * @swagger
 *  /nhpay:
 *    post:
 *      tags:
 *      - NH 간편결제
 *      description: 간편결제 고객계좌를 이용하여 Fin Account 발급
 *      produces:
 *      - application/json
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "수량과 제품 idx를 전달"
 *        schema:
 *          type: object
 *          properties:
 *            price:
 *              type: string
 *              example: "26300"  
 *            product:
 *              type: string
 *              example: "단호박 크림 파스타 외 2건"  
 *            userFinAc:
 *              type: string
 *              example: "00820100007500000000000005769"  
 *            sellerAc:
 *              type: string
 *              example: "3020000003415"  
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */

router.post('/', withdrawNhpay);

/**
 * @swagger
 *  /nhpay/issue:
 *    post:
 *      tags:
 *      - NH 간편결제
 *      description: 간편결제 고객계좌를 이용하여 Fin Account 발급
 *      produces:
 *      - application/json
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "수량과 제품 idx를 전달"
 *        schema:
 *          type: object
 *          properties:
 *            bankCode:
 *              type: string
 *              example: "011"  
 *            account:
 *              type: string
 *              example: "3020000003435"  
 *            birth:
 *              type: string
 *              example: "19980812"  
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */

router.post('/issue', issueFinAccount);

module.exports = router;
