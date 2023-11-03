require('dotenv').config();

// get the client
const mysql = require('mysql2')

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT, // default 3306,
    password: process.env.DB_PASSWORD, //default empty
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = connection;