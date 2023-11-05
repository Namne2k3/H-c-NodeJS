const express = require('express');
const router = express.Router();
const { getHomePage, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser)
router.get('/update/:userId', getUpdatePage)

module.exports = router;