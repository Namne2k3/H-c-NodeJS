const connection = require('../config/database')

let users = [];

const getHomePage = (req, res) => {
    // process data
    // call models
    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            users = results;

            res.send(JSON.stringify(users));
        }
    )
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