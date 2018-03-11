var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var cheerio_tableparser = require('cheerio-tableparser');

var makePlayer = require('./config/player');
var config = require('./config/config');

module.exports = function (database, options, index) {
    options.url = config.url;
    options.url = options.url+index;
    //console.log(options.url);
    request(options, function (error, response, body) {
        if(body) {
            var loadedHtml = cheerio.load(body);
        } else {
            console.log('no result');
            return;
        }
        loadedHtml('b').remove();

        var Player = makePlayer(index, myTrim(loadedHtml('.player-info-title').text()));
        if(Player.name === '') {
            return;
        }
        Player.birth = myTrim(loadedHtml('.player-info-1').text()).substr(0,10).replace(/-/g,'');
        Player.hand = myTrim(loadedHtml('.player-info-2').text());
        Player.position = myTrim(loadedHtml('.player-info-4').text());
        Player.team = myTrim(loadedHtml('.player-info-6').text().substr(0,3));

        var salaryStr = myTrim(loadedHtml('.player-info-8').text()).replace(/,/g,'').substr(1);
        if(salaryStr === '') {
            Player.salary = 0;
        } else {

            Player.salary = parseInt(salaryStr);
        }



        var tblStr = [];
        tblStr[0] = '<table>'+loadedHtml('#p1').find('table').html()+'</table>';
        tblStr[1] = '<table>'+loadedHtml('#p2').find('table').html()+'</table>';
        tblStr[2] = '<table>'+loadedHtml('#p3').find('table').html()+'</table>';

        for(var k = 0 ; k< tblStr.length; k++) {

            var $ = cheerio.load(tblStr[k]);
            cheerio_tableparser($);
            var data = $('table').parsetable(true, true, true);
            //console.dir(data);

            for(var i = 0; i < data.length; i++) {
                var years = data[i].length;
                Player.year = years;
                if(Player.position.toString() === '투수') {

                    if(data[i][0].toString() === '시즌' ||
                        data[i][0].toString() === '팀명') {
                        continue;
                    }
                    if(data[i][0].toString() === '삼진/9' ||
                        data[i][0].toString() === '볼넷/9' ||
                        data[i][0].toString() === '홈런/9' ||
                        data[i][0].toString() === 'BABIP' ||
                        data[i][0].toString() === 'LOB%' ||
                        data[i][0].toString() === 'ERA' ||
                        data[i][0].toString() === 'RA9-WAR' ||
                        data[i][0].toString() === 'FIP' ||
                        data[i][0].toString() === 'kFIP' ||
                        data[i][0].toString() === 'WAR' ||
                        data[i][0].toString() === '삼진%' ||
                        data[i][0].toString() === '볼넷%' ||
                        data[i][0].toString() === '삼/볼' ||
                        data[i][0].toString() === '피안타율' ||
                        data[i][0].toString() === '피출루율' ||
                        data[i][0].toString() === '피장타율' ||
                        data[i][0].toString() === '피OPS' ||
                        data[i][0].toString() === 'WHIP' ) {

                        Player[data[i][0]] = roundInThree(average(data[i]));
                    } else {

                        Player[data[i][0]] = roundInThree(sum(data[i]));
                    }

                } else {
                    if(data[i][0].toString() === '시즌' ||
                        data[i][0].toString() === '팀명') {
                        continue;
                    }
                    if( data[i][0].toString() === 'BABIP' ||
                        data[i][0].toString() === '타율' ||
                        data[i][0].toString() === '출루율' ||
                        data[i][0].toString() === '장타율' ||
                        data[i][0].toString() === 'OPS' ||
                        data[i][0].toString() === 'wOBA' ||
                        data[i][0].toString() === 'WAR' ||
                        data[i][0].toString() === '삼진%' ||
                        data[i][0].toString() === '볼넷%' ||
                        data[i][0].toString() === '볼/삼' ||
                        data[i][0].toString() === 'RC' ||
                        data[i][0].toString() === 'RC/27' ||
                        data[i][0].toString() === 'wRC' ||
                        data[i][0].toString() === 'SPD' ||
                        data[i][0].toString() === 'wSB' ||
                        data[i][0].toString() === 'wRAA' ||
                        data[i][0].toString() === 'wSB' ||
                        data[i][0].toString() === '타수/홈런' ||
                        data[i][0].toString() === 'ISO') {

                        Player[data[i][0]] = roundInThree(average(data[i]));
                    } else {

                        Player[data[i][0]] = roundInThree(sum(data[i]));
                    }

                }

            }
        }
        //console.dir(Player);
        if(Player.position.toString() === '투수') {

            var pitcherModel = database['pitcherModel'];
            var pitcherStat = new pitcherModel(Player);
            pitcherStat.save(function(err) {
                if (err) {
                    console.error(err);
                }
                console.log(Player.id + ": "+Player.name+' 등록완료');
                return;
            });
        } else {
            var batterModel = database['batterModel'];
            var batterStat = new batterModel(Player);
            batterStat.save(function(err) {
                if (err) {
                    console.error(err);
                }
                console.log(Player.id + ": "+Player.name+' 등록완료');
                return;
            });
        }
    });
};

function myTrim(x) {
    var str = x.replace(/^\s+|\s+$/gm,'');
    return str.replace(/\n/g, '');
}

function sum (array) {
    var result = 0;
    for(var i = 1; i < array.length; i++) {
        result+=parseFloat(array[i]);
    }
    return result;
}

function average (array) {
    var result = 0;
    for(var i = 1; i < array.length; i++) {
        if(array[i].toString() === '-') {
            array[i] = 0;
        }
        result+=parseFloat(array[i]);
    }
    if(result == 0) return 0;
    return result/(array.length-1);
}

function roundInThree(num) {
    if(num === 0) return 0;
    return Math.round(num*1000)/1000;
}