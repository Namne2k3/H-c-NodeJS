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
const app = express();

const routerVA = require('./routes/web_VA')
const routerNam = require('./routes/web_Nam')

const port = process.env.PORT;

// config template engine
// config static files
configViewEngine(app);

// Sử dụng .env
const hostname = process.env.HOST_NAME;


// khai bao routes
app.use('/va', routerVA)
app.use('/nam', routerNam)


// D:\File\Code\NodeJS Express\H-c-NodeJS\src
console.log(__dirname);

// listen port
app.listen(port, process.env.HOST_NAME, () => {
    console.log(`Example app listening on port ${port}`);
})


