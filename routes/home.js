const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

/**
 * @swagger
 *  /today:
 *    get:
 *      tags:
 *      - today
 *      description: 오늘의 특가 제품 조회
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.get('/today', homeController.today);
router.get('/recommend', homeController.recommend);

module.exports = router;
