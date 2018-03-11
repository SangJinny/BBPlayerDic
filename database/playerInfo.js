var schema = {};
var playerInfo;

schema.createSchema = function (mongoose) {

    playerInfo = mongoose.schema({

        id:{type: String, required: true, unique: true},
        name:{type: String, required: true},
        birth:{type: String},
        hand:{type: String, required: true},
        height:{type: Number},
        weight:{type: Number},
        position:{type: String},
        team:{type: String},
        salary:{type: Number}
    });

    return playerInfo;
};

module.exports = schema;