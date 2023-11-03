const express = require('express');
const router = express.Router();
const { getHomePage, getCreatePage, createUser } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.post('/create-user', createUser);

module.exports = router;