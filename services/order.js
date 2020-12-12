const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');

router.post('/', orderController.getSeries);
router.post('/pay', orderController.getSeries);

module.exports = router;
