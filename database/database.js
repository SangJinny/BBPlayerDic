var mongoose = require('mongoose');
var database = {};

database.init = function (app, config) {
    connect(app, config);
};

function connect(app, config) {
    // 데이터베이스 연결
    console.log('DB연결을 시도합니다.');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.dbUrl);
    database = mongoose.connection;

    database.on('error', console.error.bind(console, 'mongoose connection error.'));

    database.on('open', function() {
        console.log('데이터베이스에 연결되었습니다.: '+config.dbUrl);
        createSchema(app, config);
    });

    database.on('disconnected', function(){
        console.log('연결이 끊어졌습니다. 5초 후 다시연결합니다.');
        setInterval(connect, 5000);
    });

    function createSchema(app, config) {
        var schemaLen = config.dbSchemas.length;

        for(var i = 0; i < schemaLen; i++) {
            var curItem = config.dbSchemas[i];

            // config.js의 createSchema 호출하여 스키마 GET
            var curSchema = require(curItem.file).createSchema(mongoose);
            // config.js의 정보로 model 생성
            var curModel = mongoose.model(curItem.collection, curSchema);

            // database 객체에 각각 저장
            database[curItem.schemaName] = curSchema;
            database[curItem.modelName] = curModel;
        }
        // 어디서든 쉽게 꺼내쓰도록..
        app.set('database', database);
    }
}

module.exports = database;