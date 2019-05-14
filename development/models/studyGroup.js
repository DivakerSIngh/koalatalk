var mongoose = require('mongoose');
var studyGroupSchema = mongoose.Schema({
    userId: {type: String,ref: 'users'},
    name: {type: String},
    image: {type: String},
    email: {type: String},
    category: {type: String},
    subCategory: {type: String},
    country:{type: String},
    language:{type: String},
    timeZone:{type: String},
    subject:{type: String},
    lauguage:{type: String},
    description:{type: String},
    comment:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now},replyData:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now}}]}],
    internalComment:[{userId: {type: String,ref: 'users'},isNoticed:{type:Boolean,default:false},comment:{type: String},created: {type: Date,default:Date.now},replyData:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now}}]}],
    members:[{userId: {type: String,ref: 'users'},memberStatus:{type: Number,default:0},created: {type: Date,default:Date.now}}],
    notice:[{commentId: {type: String},commentData:[{userId: {type: String,ref: 'users'},comment:{type: String},created: {type: Date,default:Date.now}}],created: {type: Date,default:Date.now}}],
    view:{type: Number,default:0},
    created: {type: Date},
    updated: {type: Date}
});
var studyGroup = module.exports = mongoose.model('studyGroup', studyGroupSchema);
module.exports.createStudyGroup = function(param, callback) {
    studyGroup.create(param, function(saveErr, saveRes) {
        if (saveErr) {
            callback(saveErr);
        } else {
            callback(null, saveRes);
        }
    });
}

module.exports.findByParamsPagination = function(param, limit, sortParam, callback) {
studyGroup.find(param).populate([{path:"userId",select: 'firstName lastName image'},{path:"comment.userId",select: 'firstName lastName image'},{path:"comment.replyData.userId",select: 'firstName lastName image'},{path:"members.userId",select: 'firstName lastName image'},{path:"internalComment.userId",select: 'firstName lastName image'},{path:"internalComment.replyData.userId",select: 'firstName lastName image'},{path:"notice.commentData.userId",select: 'firstName lastName image'}]).sort(sortParam).skip(Number.parseInt(limit)).limit(10).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}

module.exports.updateByParams = function(param, callback) {
studyGroup.findByIdAndUpdate({_id:param._id},{ $set: param}, { new: true },function(UpdateErr,UpdateRes){
  if (UpdateErr){
    callback(UpdateErr);
  }else{
  callback(null,UpdateRes);  
}
  })
}

module.exports.CreateCommentSingleLevel = function(param, callback) {
studyGroup.findByIdAndUpdate({ '_id': param._id },{ $addToSet: { comment: { $each: param.commentData } } }, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes.comment[upRes.comment.length-1].toObject());  
}
  })
}

module.exports.CreateCommentSingleLevelInternal = function(param, callback) {
studyGroup.findByIdAndUpdate({ '_id': param._id },{ $addToSet: { internalComment: { $each: param.commentData } } }, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes.internalComment[upRes.internalComment.length-1].toObject());  
}
  })
}

module.exports.CreateCommentDoubleLevel = function(param, callback) {
studyGroup.update({"comment._id": mongoose.mongo.ObjectId(param._id)},{$push: {'comment.$.replyData': param.commentData}}, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes);  
}
  })
}

module.exports.CreateCommentDoubleLevelInternal = function(param, callback) {
studyGroup.update({"internalComment._id": mongoose.mongo.ObjectId(param._id)},{$push: {'internalComment.$.replyData': param.commentData}}, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes);  
}
  })
}
/*
*  Delete Comment and member
*/
module.exports.deleteComment = function(param, callback) {
studyGroup.update(param.conditions,{ $pull:param.data},{ safe: true }).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}


/*
* Delete by inderty
*/


module.exports.EditComment = function(param, callback) {
studyGroup.update(param.conditions,param.update,{multi: true, new: true }).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}



module.exports.viewGroup = function(param, callback) {
studyGroup.findByIdAndUpdate({_id:param._id},{ $inc: { 'view': 1}}, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }
  callback(null,upRes);
  });
}

module.exports.countByParams = function(param, callback) {
studyGroup.count(param).exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
})
}
module.exports.addNewMembers = function(param, callback) {
studyGroup.findByIdAndUpdate({ '_id': param._id },{ $addToSet: { members: { $each: param.membersData } } }, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes.members[upRes.members.length-1].toObject());  
}
  })
}


/*
* Pinned
*/

module.exports.NoticeComment = function(param, callback) {
studyGroup.findByIdAndUpdate({ '_id': param._id },{ $addToSet: { notice: { $each: param.noticeData } } }, { new: true },function(upErr,upRes){
  if (upErr){
    callback(upErr);
  }else{
  callback(null,upRes.notice[upRes.notice.length-1]);  
}
  })
}

module.exports.DeleteStudyGroup = function(param, callback) {
studyGroup.find(param).remove().exec(function(err, posts){
if (err){
  return callback(err);
}
return callback(null,posts);
});
}