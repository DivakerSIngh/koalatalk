var mongoose = require('mongoose');
var studyGroupSchema = mongoose.Schema({
    userId: {type: String,ref: 'users'},
    autoIncrementId: {type: Number},
    title: {type: String},
    category: {type: String},
    language:{type: String},
    description:{type: String},
    comment:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now},replyData:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now}}]}],
    view:{type: Number,default:0},
    type:{type: Number,default:0},/* 0 for manual create and 1 for fetch from URl*/   
    url:{type: String,default:''},/* */        
    status:{type: Number,default:0},
    created: {type: Date},
    updated: {type: Date}
});
var Bulletin = module.exports = mongoose.model('bulletins', studyGroupSchema);
module.exports.createBulletin = function(param, callback) {
    Bulletin.create(param, function(saveErr, saveRes) {
        if (saveErr) {
            callback(saveErr);
        } else {
            callback(null, saveRes);
        }
    });
}

module.exports.findByParamsPagination = function(param, limit, sortParam, callback) {
Bulletin.find(param).populate([{path:"userId",select: 'firstName lastName image'},{path:"comment.userId",select: 'firstName lastName image'},{path:"comment.replyData.userId",select: 'firstName lastName image'}]).sort(sortParam).skip(Number.parseInt(limit)).limit(10).lean().exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}
/*
* Auto increment
*/
module.exports.viewBulletin = function(param, callback) {
Bulletin.findByIdAndUpdate({_id:param._id},{ $inc: param.increment}, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }
  callback(null,upRes);
  });
}

module.exports.countByParams = function(param, callback) {
Bulletin.count(param).lean().exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}


module.exports.CreateCommentSingleLevel = function(param, callback) {
Bulletin.findByIdAndUpdate({ '_id': param._id },{ $addToSet: { 'comment': { $each: param.commentData } } }, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes.comment[upRes.comment.length-1].toObject());  
}
  })
}

module.exports.deleteComment = function(param, callback) {
Bulletin.update(param.conditions,{ $pull:param.data},{ safe: true }).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}

module.exports.CreateCommentDoubleLevel = function(param, callback) {
Bulletin.update({"comment._id": mongoose.mongo.ObjectId(param._id)},{$push: {'comment.$.replyData': param.commentData}}, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes);  
}
  })
}

module.exports.EditComment = function(param, callback) {
Bulletin.update(param.conditions,param.update,{multi: true, new: true }).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}


/*
*.find({ id:333 }).remove().exec();
*/

module.exports.DeleteBulletin = function(param, callback) {
Bulletin.find(param).remove().exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
});
}