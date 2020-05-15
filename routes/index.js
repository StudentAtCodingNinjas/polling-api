const express = require('express');
const router = express.Router();

//transfer route to questions.js
router.use('/questions',require('./questions'));

//transfer routes to options.js
router.use('/options',require('./options'));

module.exports= router;
