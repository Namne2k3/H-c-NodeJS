const express = require('express');
const router = express.Router();
const { getHomePage, getAnhVA, createUser } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/vananh', getAnhVA);
router.post('/create-user', createUser);

module.exports = router;