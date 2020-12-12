const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/today', homeController.today);

module.exports = router;
