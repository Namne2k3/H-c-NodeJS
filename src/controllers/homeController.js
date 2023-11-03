const connection = require('../config/database')

let users = [];

const getHomePage = (req, res) => {
    // process data
    // call models
    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            users = results;

            console.log(JSON.stringify(users));
        }
    )
    return res.render('home')
}

const getAnhVA = (req, res) => {
    // process data
    // call models

    res.render('sample')
}

module.exports = {
    getHomePage,
    getAnhVA
}