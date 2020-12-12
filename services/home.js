const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/curation', homeController.getSeries);
router.get('/today', homeController.getSeries);

module.exports = router;
