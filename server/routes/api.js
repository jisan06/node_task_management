const express = require('express');
require('express-group-routes');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('api url')
})

module.exports = router;