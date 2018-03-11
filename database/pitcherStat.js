var schema = {};
schema.createSchema = function (mongoose) {

    var pitcherStat = mongoose.Schema({

        id: {type: Number, required: true},
        name: {type: String},
        birth: {type: String},
        hand: {type: String},
        position: {type: String},
        team: {type: String},
        salary: {type: Number, default: 0},
        year: {type: Number, default: 0},
        '승': {type: Number, default: 0},
        '패': {type: Number, default: 0},
        '세': {type: Number, default: 0},
        '홀드': {type: Number, default: 0},
        '블론': {type: Number, default: 0},
        '경기': {type: Number, default: 0},
        '선발': {type: Number, default: 0},
        '이닝': {type: Number, default: 0},
        '삼진/9': {type: Number, default: 0},
        '볼넷/9': {type: Number, default: 0},
        '홈런/9': {type: Number, default: 0},
        BABIP: {type: Number, default: 0},
        'LOB%': {type: Number, default: 0},
        ERA: {type: Number, default: 0},
        'RA9-WAR': {type: Number, default: 0},
        FIP: {type: Number, default: 0},
        kFIP: {type: Number, default: 0},
        WAR: {type: Number, default: 0},
        '완투': {type: Number, default: 0},
        '완봉': {type: Number, default: 0},
        QS: {type: Number, default: 0},
        '타자': {type: Number, default: 0},
        '안타': {type: Number, default: 0},
        '2루타': {type: Number, default: 0},
        '3루타': {type: Number, default: 0},
        '홈런': {type: Number, default: 0},
        '실점': {type: Number, default: 0},
        '자책': {type: Number, default: 0},
        '삼진': {type: Number, default: 0},
        '볼넷': {type: Number, default: 0},
        '고4': {type: Number, default: 0},
        HBP: {type: Number, default: 0},
        '폭투': {type: Number, default: 0},
        '보크': {type: Number, default: 0},
        PK: {type: Number, default: 0},
        '도루': {type: Number, default: 0},
        '도실': {type: Number, default: 0},
        '삼진%': {type: Number, default: 0},
        '볼넷%': {type: Number, default: 0},
        '삼/볼': {type: Number, default: 0},
        '피안타율': {type: Number, default: 0},
        '피출루율': {type: Number, default: 0},
        '피장타율': {type: Number, default: 0},
        '피OPS': {type: Number, default: 0},
        WHIP: {type: Number, default: 0}
    });

    return pitcherStat;
};

module.exports = schema;