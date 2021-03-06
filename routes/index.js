var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/user', require('./user'));
router.use('/home', require('./home'));
router.use('/detail', require('./detail'));
router.use('/order', require('./order'));
router.use('/cart', require('./cart'));
router.use('/forest', require('./forest'));
router.use('/nhpay', require('./nhpay'));

module.exports = router;
