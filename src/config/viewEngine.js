const path = require('path');
const express = require('express')

const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    // config app bodies
    app.use(express.json()); // Used to parse JSON bodies
    app.use(express.urlencoded({ extended: true })) // Parse URL encoded bodies

    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;