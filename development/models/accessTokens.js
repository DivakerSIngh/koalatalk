var mongoose = require('mongoose');
var accessTokenSchema = mongoose.Schema({
    userId:{type: String},
    accesstoken:{type: String},
    created: {type: Date},
    updated: {type: Date},
    isDelete: {type: Boolean}
});
var AccessToken = module.exports = mongoose.model('accesstokens', accessTokenSchema);
module.exports.createToken = function(param, callback) {
    AccessToken.create(param, function(saveErr, saveRes) {
        if (saveErr) {
            callback(saveErr);
        } else {
            callback(null, saveRes);
        }
    });
}

module.exports.findByParams = function(param, callback) {
    AccessToken.find(param, function(findErr, findRes) {
        if (findErr) {
            callback(findErr);
        } else {
            callback(null, findRes);
        }
    });
}