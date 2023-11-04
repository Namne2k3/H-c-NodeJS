const express = require('express');
const router = express.Router();
const { getHomePage, getCreatePage, createUser, getUpdatePage } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.post('/create-user', createUser);
router.get('/update/:userId', getUpdatePage)

module.exports = router;