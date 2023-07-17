const express = require('express')
const exampleController = require('./example.controller.cjs')

const router = express.Router();

router.get('/looking/path', exampleController.doTest);

module.exports = router;
