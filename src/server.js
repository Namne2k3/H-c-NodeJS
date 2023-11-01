// const http = require('http');

// const hostname = 'localhost'
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

// get the client
const mysql = require('mysql2')

// config dotenv để có thể sử dụng được các biến môi trường
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const express = require('express');
const router = require('./routes/web')

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config template engine
// config static files
configViewEngine(app);

// khai bao routes
app.use('/', router)


// D:\File\Code\NodeJS Express\H-c-NodeJS\src
console.log(__dirname);

// test connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307, // default 3306,
    password: '123456', //default empty
    database: 'hoidanit'
});

// simple query
connection.query(
    'SELECT * FROM Users',
    (err, data, fields) => {
        console.log(data);
        //console.log(fields);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})


