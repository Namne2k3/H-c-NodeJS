require('dotenv').config();

// get the client
const mysql = require('mysql2')

// create connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT, // default 3306,
    password: process.env.DB_PASSWORD, //default empty
    database: process.env.DB_NAME
});

module.exports = connection;