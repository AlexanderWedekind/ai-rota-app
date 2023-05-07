const express = require('express');
const router = express.Router()
const rotaRequest = require('../middlewareFunctions/rotaRequest.js');




router.get('', rotaRequest.newRotaFromOpenAI);

module.exports = router;
