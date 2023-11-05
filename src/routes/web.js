const express = require('express');
const router = express.Router();
const { getHomePage, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')


// routeVanAnh
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:userId', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)
router.get('/update/:userId', getUpdatePage)

module.exports = router;