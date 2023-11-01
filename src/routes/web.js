const express = require('express');
const router = express.Router();
const { getHomePage, getAnhVA } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/vananh', getAnhVA);

module.exports = router;