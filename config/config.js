module.exports = {
    serverPort: process.env.PORT || 3000,
    dbUrl: 'mongodb://localhost:27017/BBPlayerDic',
    dbSchemas: [
        //{file: '../database/playerInfo', collection:'player', schemaName: 'playerInfo', modelName: 'player'},
        {file: '../database/batterStat', collection:'batterStats', schemaName: 'batterStat', modelName: 'batterModel'},
        {file: '../database/pitcherStat', collection:'pitcherStats', schemaName: 'pitcherStat', modelName: 'pitcherModel'}
    ],
    url: 'http://www.kbreport.com/player/detail/'
};