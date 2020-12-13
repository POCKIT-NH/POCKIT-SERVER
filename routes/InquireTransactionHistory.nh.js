const express = require('express');
const router = express.Router();

const HistoryController = require('../controllers/InquireTransactionHistory.nh');

router.post('/', HistoryController.InHistory);

module.exports = router;
