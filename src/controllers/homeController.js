const connection = require('../config/database')
const { getAllUser, createNewUser, getUser, updateUser } = require('../services/crudService')

const postHandleRemoveUser = (req, res) => {
    res.send("OK Deleted");
}

const postDeleteUser = async (req, res) => {
    let user = await getUser(req.params.userId);
    res.render('delete', { user: user })
}

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

    let results = await getAllUser();
    console.log("Check Results >>> ", results);

    return res.render('home', { listUsers: results })
}

const getCreatePage = (req, res) => {
    res.render('create');
}

const getUpdatePage = async (req, res) => {
    console.log("Check req.params >>> ", JSON.stringify(req.params));

    let user = await getUser(req.params.userId);

    res.render('update', { user: user });
}

const postUpdateUser = async (req, res) => {
    let { email, myname, city, userId } = req.body;

    let result = await updateUser(req.body);

    console.log("Check postUpdateUser >>> ", result);

    let allUsers = await getAllUser();

    res.redirect('/');
}

const postCreateUser = async (req, res) => {
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

    let results = await createNewUser(req.body);

    console.log("Check createNewUser >>> ", results);

    res.send("Created User succeed!");
}

module.exports = {
    getHomePage,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}