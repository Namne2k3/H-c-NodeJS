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


// config dotenv để có thể sử dụng được các biến môi trường
require('dotenv').config();

const configViewEngine = require('./config/viewEngine')
const express = require('express');
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
// config static files
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes)


// D:\File\Code\NodeJS Express\H-c-NodeJS\src
console.log(__dirname);

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


