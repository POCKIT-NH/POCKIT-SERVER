var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/user', require('./user'));
router.use('/home', require('./home'));
router.use('/detail', require('./detail'));
router.use('/order', require('./order'));
router.use('/nhpay', require('./nhpay'));
router.use('/review', require('./review'));
router.use('/forest', require('./forest'));

module.exports = router;
