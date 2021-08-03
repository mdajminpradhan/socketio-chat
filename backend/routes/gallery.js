const express = require('express');
const router = express.Router();

const { test } = require('../controllers/gallery');

// test route
router.get('/test', test);

module.exports = router;
