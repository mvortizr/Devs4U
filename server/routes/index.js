
const express = require('express');
const router = express.Router();
const axios = require('axios');

//Ruta de prueba

router.get('/prueba', function (req, res) {
    res.send(JSON.stringify({hello: 'hello'}));
});

module.exports = router;
