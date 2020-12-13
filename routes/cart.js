const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');

/**
 * @swagger
 *  /today:
 *    post:
 *      tags:
 *      - today
 *      description: 오늘의 특가 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "수량과 제품 idx를 전달"
 *        required: true
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.post('/', cartController.pushCart);

/**
 * @swagger
 *  /today:
 *    get:
 *      tags:
 *      - today
 *      description: 장바구니 조회
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 장바구니 조회 성공
 *      schema:
 *          $ref: '#/components/schemas/Product'
 */
router.get('/', cartController.getCart);

module.exports = router;
