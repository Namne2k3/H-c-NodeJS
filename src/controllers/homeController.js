const connection = require('../config/database')

let users = [];

const getHomePage = async (req, res) => {
    // process data
    // call models
    // connection.query(
    //     'SELECT * FROM Users',
    //     (err, results, fields) => {
    //         users = results;

    //         console.log(JSON.stringify(users));
    //     }
    // )

    const [results, fields] = await connection.query('SELECT * FROM Users');
    console.log("Check Results >>> ", results);

    return res.render('home')
}

const getCreatePage = (req, res) => {
    res.render('create');
}

const createUser = async (req, res) => {
    // process data
    // call models

    let { email, myname, city } = req.body;

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //      VALUES (?, ?, ?)`,
    //     [email, myname, city],
    //     (err, results) => {
    //         if (err)
    //             console.log(err);

    //         console.log(results);
    //         res.send("Created user succeed!")
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, myname, city]
    );

    console.log("Check Results >>> ", results);

    res.send("Created User succeed!");
}

module.exports = {
    getHomePage,
    getCreatePage,
    createUser
}