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
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;

console.log(process.env);

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
const hostname = 'localhost';

// routes
app.get('/', (req, res) => {
    res.send("Namne World");
})
app.get('/hoinamne', (req, res) => {
    //res.send(`<h1>Hello Namne</h1>`);
    res.render('sample')
})

// listen port
app.listen(port, process.env.HOST_NAME, () => {
    console.log(`Example app listening on port ${port}`);
})





