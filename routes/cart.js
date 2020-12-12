const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');

router.post('/', cartController.pushCart);
router.get('/', cartController.getCart);

module.exports = router;
