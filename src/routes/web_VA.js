const express = require('express');

const router = express.Router();


// routeVanAnh
router.get('/', (req, res) => {
    res.send("Van Anh ne");
})
router.get('/vananh_anh', (req, res) => {
    //res.send(`<h1>Hello Namne</h1>`);
    res.render('sample')
})

module.exports = router;