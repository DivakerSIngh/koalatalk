var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phoneNumber: {type: String},
    profileStepOne: {type: Boolean,default:false},
    profileStepTwo: {type: Boolean,default:false},
    profileStepThree: {type: Boolean,default:false},
    profileStepFour: {type: Boolean,default:false},
    finialStep: {type: Number,default:0},
    speakLanguage: {type: String},
    languages: [],
    teachLanguage:{type: String},
    interests:[],
    certification:[],
    certificationDocs:[],
    education:[],
    educationDocs:[],
    workExperience:[],
    availableTime:[],
    videoLink:{type: String},
    videoUrlLink:{type: String},
    aboutMe:{type: String},
    parantInterest:[],
    counrty:{type: String},
    timeZone:{type: String},
    image:{type: String},
    mainlanguage:{type: String},
    additionalInfo:{type: String},
    rate:{type: Number},
    purpose:{type: Number},
    autoIncrementId: {type: Number},
    roleId: {type: Number,default:0},
    isApproved: {type: Boolean,default:false},
    password:{type: String},
    created: {type: Date},
    updated: {type: Date},
    status: {type: Number,default:0},/*0 for not register 1 for approved 2 for  block*/
    isDelete: {type: Boolean}
});
var User = module.exports = mongoose.model('users', UserSchema);
module.exports.createUser = function(param, callback) {
    User.create(param, function(saveErr, saveRes) {
        if (saveErr) {
            callback(saveErr);
        } else {
            callback(null, saveRes);
        }
    });
}

module.exports.findByParams = function(param, callback) {
    User.find(param, function(findErr, findRes) {
        if (findErr) {
            callback(findErr);
        } else {
            callback(null, findRes);
        }
    });
}
/* 
* We will remove this function.
*/
module.exports.findUserLimit = function(param, callback) {
    User.find(param, function(findErr, findRes) {
        if (findErr) {
            callback(findErr);
        } else {
            callback(null, findRes);
        }
    });
}


module.exports.findByParamsPagination = function(param, limit, sortParam, callback) {
User.find(param).sort(sortParam).skip(Number.parseInt(limit)).limit(10).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}

module.exports.countByParams = function(param, callback) {
User.count(param).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}

module.exports.Update = function(param, callback) {
User.findByIdAndUpdate({_id: param._id}, {'$set': param}, {new: true}, function(updateErr, resultRes) {
if (updateErr) {
            callback(updateErr);
        } else {
            callback(null, resultRes);
        }    
})
}

module.exports.deleteUser = function(param, callback) {
User.findOneAndRemove(param, function(updateErr, resultRes) {
if (updateErr) {
            callback(updateErr);
        } else {
            callback(null, resultRes);
        }    
})
}