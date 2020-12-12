const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/review');

router.post('/', reviewController.getSeries);
router.get('/', reviewController.getSeries);

module.exports = router;
