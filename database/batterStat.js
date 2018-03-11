var schema = {};
schema.createSchema = function (mongoose) {

    var batterStat = mongoose.Schema({

        id: {type: Number, required: true},
        name: {type: String},
        birth: {type: String},
        hand: {type: String},
        position: {type: String},
        team: {type: String},
        salary: {type: Number, default: 0},
        year: {type: Number, default: 0},
        '경기': {type: Number, default: 0},
        '타석': {type: Number, default: 0},
        '타수': {type: Number, default: 0},
        '안타': {type: Number, default: 0},
        '홈런': {type: Number, default: 0},
        '득점': {type: Number, default: 0},
        '타점': {type: Number, default: 0},
        '볼넷': {type: Number, default: 0},
        '삼진': {type: Number, default: 0},
        '도루': {type: Number, default: 0},
        BABIP: {type: Number, default: 0},
        '타율': {type: Number, default: 0},
        '출루율': {type: Number, default: 0},
        '장타율': {type: Number, default: 0},
        OPS: {type: Number, default: 0},
        wOBA: {type: Number, default: 0},
        WAR: {type: Number, default: 0},
        '단타': {type: Number, default: 0},
        '2루타': {type: Number, default: 0},
        '3루타': {type: Number, default: 0},
        '고4': {type: Number, default: 0},
        HBP: {type: Number, default: 0},
        '희플': {type: Number, default: 0},
        '희타': {type: Number, default: 0},
        '병살': {type: Number, default: 0},
        '도실': {type: Number, default: 0},
        '볼넷%': {type: Number, default: 0},
        '삼진%': {type: Number, default: 0},
        '볼/삼': {type: Number, default: 0},
        ISO: {type: Number, default: 0},
        '타수/홈런': {type: Number, default: 0},
        RC: {type: Number, default: 0},
        'RC/27': {type: Number, default: 0},
        wRC: {type: Number, default: 0},
        SPD: {type: Number, default: 0},
        wSB: {type: Number, default: 0},
        wRAA: {type: Number, default: 0}
    });

    return batterStat;
};

module.exports = schema;