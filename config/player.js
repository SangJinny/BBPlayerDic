function Player(id, name) {
  this.id = id;
  this.name = name;
}


module.exports = function makePlayer (id, name) {
    return new Player(id, name);
};

/*
var player = {
    id: '0',
    name: {type: String, required: true}
    birth:{type: String},
    hand:{type: String, required: true},
    height:{type: Number},
    weight:{type: Number},
    position:{type: String},
    team:{type: String},
    salary:{type: Number}
    year: 0,
    game:0,
    win:0,
    lose:0,
    save:0,
    hold:0,
    blown:0,
    hit:0,         // (피)안타
    homerun:0,     // (피)홈런
    score:0,       // 실점(득점)
    rbi:0,         // 자책점(타점)
    fourballs:0,   // 볼넷
    strikeout:0,   // 삼진
    steal:0,       // 도루허용(성공)
    steal_fail:0,  // 도루실패
    starting:0,       // 선발
    shutout:0,        // 완봉
    complete:0,        // 완투
    qs:0,
    inning:0,
    kper9:0,         // 9이닝당삼진
    fbper9:0,         // 9이닝당볼넷
    hrper9:0,          // 9이닝당피홈런
    whip:0,
    babip:0,
    lob:0,        // LOB%
    era:0,
    fip:0,
    kfip:0,
    hit_average:0, // (피)안타율
    onbase:0,      // (피)출루율
    slug_average:0,// (피)장타율
    ops:0,         // (피)OPS
    war:0,

    appearance:0,  // 타석
    bats:0,        // 타수
    base1_hit:0,
    base2_hit:0,
    base3_hit:0,
    woba:0
};
*/