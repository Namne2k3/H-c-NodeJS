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

}

const createUser = (req, res) => {
    // process data
    // call models

    let { email, myname, city } = req.body;

    connection.query(
        `INSERT INTO Users (email, name, city)
         VALUES (?, ?, ?)`,
        [email, myname, city],
        (err, results) => {
            if (err)
                console.log(err);

            console.log(results);
            res.send("Created user succeed!")
        }
    );
}

module.exports = {
    getHomePage,
    getAnhVA,
    createUser
}