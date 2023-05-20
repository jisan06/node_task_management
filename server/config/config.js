require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require("path")
const config = {
    app: {
        port: process.env.PORT || 8080
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/node_task_management"
    },
    commonDepends: [
        express.static(path.join(__dirname, '../public')),
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
    ]
}

module.exports = config;