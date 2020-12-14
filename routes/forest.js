const express = require('express');
const router = express.Router();

const forestController = require('../controllers/forest');

router.get('/', forestController.forest);

module.exports = router;
