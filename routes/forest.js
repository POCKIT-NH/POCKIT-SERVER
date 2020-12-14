const express = require('express');
const router = express.Router();

const forestController = require('../controllers/forest');

/**
 * @swagger
 *  /forest:
 *    get:
 *      tags:
 *      - forest
 *      description: 결제정보 기반 수확률(point)
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 수확률 불러오기 성공
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *            message:
 *              type: string
 *              example: "DB 조회 성공"
 *            data:
 *              type: string
 *              example: 18
 *
 */
router.get('/', forestController.forest);

module.exports = router;
