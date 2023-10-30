const express = require('express');

const router = express.Router();


// routeVanAnh
router.get('/', (req, res) => {
    res.send("Namne");
})
router.get('/namne_anh', (req, res) => {
    //res.send(`<h1>Hello Namne</h1>`);
    res.render('sample')
})

module.exports = router;