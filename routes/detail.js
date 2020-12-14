const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail');

/**
 * @swagger
 *  /detail?idx=1:
 *    get:
 *      tags:
 *      - detail
 *      description: 제품 상세페이지
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 상세페이지 성공
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *            message:
 *              type: string
 *              example: "DB 조회 성공"
 *            data:
 *                type: object
 *                properties:
 *                  idx:
 *                    type: string
 *                    example: 1
 *                  title:
 *                    type: string
 *                    example: "안심 스테이크"
 *                  product_img:
 *                    type: string
 *                    example: "https://sopt-server-27.s3.ap-northeast-2.amazonaws.com/pockit/anshim.png"
 *                  price:
 *                    type: string
 *                    example: 7900
 *
 */

router.get('/', detailController.detail);

module.exports = router;
