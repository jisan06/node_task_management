const express = require('express');
const app = express();
const routes = require('./routes/index');
const config = require('./config/config');

app.use('/', routes);
app.use(config.commonDepends);

app.use((req, res, next) => {
    res.status(404).json({
        message: "404 not found"
    });
});

module.exports = app;