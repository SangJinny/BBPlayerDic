var express = require('express');
var router = express.Router();
var kbreport = require('../kbreport');
var database;

var options = {
    headers: {
        'Accept': 'text/*'
    }
};

module.exports = function(app) {
    /* GET users listing. */
    router.get('/kbreport', function(req, res, next) {

        var i = 1;
        var database = app.get('database');
        var interval = setInterval(function(){
            kbreport(database, options, i++);
            if(i >= 1550) { // 1550
                clearInterval(interval);
                console.log('종료');
            }
        },100);
        res.send('성공');
    });

    return router;
};
