var express = require('express');
var app = express();
var router = express.Router();
var test = require('../kbreport');

var options = {
    url: 'http://www.kbreport.com/player/detail/221',
    headers: {
        'Accept': 'text/*'
    }
};

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(app.get('database'));
});

module.exports = router;
