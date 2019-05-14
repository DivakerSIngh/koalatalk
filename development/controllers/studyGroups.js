"use strict"
/*
* Category and sub category
*/
exports.categoryAndSubCategory = (req, res) => {
try {
let dataGrid = [{'_id':1,'imageUrl':'http://s3-ap-southeast-2.amazonaws.com/s3.kidslink.co.nz/wp-content/uploads/2015/03/communication-skills-eye-contact.jpg','name':'FREE TALKING','innerData':[{'_id':1,'name':'Travel'},{'_id':2,'name':'Sports'},{'_id':3,'name':'Reading'},{'_id':4,'name':'Cooking'},{'_id':4,'name':'Entertainment'}]},{'_id':2,'imageUrl':'https://i1.wp.com/www.godsownheart.com/wp-content/uploads/2016/09/Topic-Study.jpg','name':'TOPIC STUDY','innerData':[{'_id':5,'name':'Politics'},{'_id':6,'name':'Business'},{'_id':7,'name':'Tech'},{'_id':8,'name':'Social'}]},{'_id':3,'imageUrl':'http://successielts.com/wp-content/uploads/2015/10/How-to-Prepare-for-the-IELTS-Speaking-Test.jpg','name':'SPEAKING TEST','innerData':[{'_id':9,'name':'Opic'},{'_id':10,'name':'TOEFL'},{'_id':11,'name':'TOEIC'},{'_id':12,'name':'IELTS'}]},{'_id':4,'imageUrl':'http://info.shine.com/media/images/876/8876/nervousinterview_large.jpg','name':'INTERVIEW PREPARATION','innerData':[{'_id':13,'name':'Job'},{'_id':14,'name':'MBA'},{'_id':15,'name':'Graduate'},{'_id':16,'name':'Undergraduate'}]}];

res.status(200);
res.send({
message: 'User info',
code: 200,
dataGrid:dataGrid
});
} catch (e) {
console.log('catch login', e);
}
}
/*
* Create Study group
*/
exports.createStudyGroup = (req, res) => {
try {
		var jwtAuth = new Promise((resolve, reject) => {
				jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
				  if (err){
				reject({httpCode: 400,code: 400,message: 'Invalid token!'});
				  }else{
				    resolve(decoded.id)
				  }
				});
		})
       Promise.all([jwtAuth]).then(function(results) {
       	let saveData = {};

var members = req.body.membersId.split(',');
let newMembers = [];
newMembers.push({'userId':results[0],memberStatus:1})
for (var i = 0; i < members.length; i++) {
    newMembers.push({'userId':members[i],memberStatus:1}) 
}
       	saveData['userId']=results[0];
       	saveData['name']=req.body.name;
       	saveData['image']=req.body.image;
       	saveData['category']=req.body.categoryId;
       	saveData['country']=req.body.country;
       	saveData['timeZone']=req.body.timeZone;
       	saveData['subject']=req.body.subject;
       	saveData['language']=req.body.language;
       	saveData['description']=req.body.description;
       	saveData['members']=newMembers;
       	saveData['subCategory']=req.body.subCategory.split(',');
        saveData['created']=new Date();
        saveData['updated']=new Date();
studyGroup.createStudyGroup(saveData,function(err,result) {
if (err){
console.log('err',err);	
return res.status(500).json({'httpCode': 500,'code': 500,'message': 'Something went wrong.'});
}else{
return res.status(200).json({'httpCode': 200,'code': 200,'message': 'Success.','data':result._id});
}
})
}).catch(function(err) {
console.log('errerrerr',err)  
res.status(err.httpCode).json(err);
        });
} catch (e) {
console.log('catch login', e);
}
}

/*
* find Study group
*/
exports.findStudyGroup = (req, res) => {
try {
let param = {};
req.query.search === '' ?
param = {} :
param = {$or:[{"name":new RegExp(".*"+req.query.search+".*","i")},{"category":new RegExp(".*"+req.query.search+".*","i")},{"subCategory":new RegExp(".*"+req.query.search+".*","i")}]};
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
    studyGroup.findByParamsPagination(param,Number.parseInt(req.query.limit), sortParam, function(err, results) {
        if (err) {
            reject({
                httpCode: 500,
                code: 500,
                message: 'Database error'
            })
        } else {
            !results.length ? reject({
                httpCode: 200,
                code: 404,
                message: 'Data Not found'
            }) : resolve(results);
        }
    })
    });
var totalCount = new Promise(function(resolve, reject) {
            studyGroup.countByParams(param, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results);
                }
            })
        });
Promise.all([result,totalCount]).then(function(results) {
let paginationArray = [];
for (let i = 0; i < results[1];) {
    paginationArray.push(i);
    i=i+10;
}
let limit = Number.parseInt(req.query.limit);
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'limit':paginationArray,
                        'totalCount':results[1],
                        'groups':results[0].map(function(groupData) {    
                              var group = Object.assign({}, groupData);
                              group._doc.serialNumber = ++limit;
                              return group._doc;
                                    })
                    });
param = {}
}).catch(function(err) {
    console.log(err)
            res.status(err.httpCode).json(err);
            param = {}
        });

} catch (e) {
console.log('catch login', e);
}
}


/*
* find Study group
*/
exports.studyGroup = (req, res) => {
try {
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.query.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
var viewCount = new Promise(function(resolve, reject) {
            studyGroup.viewGroup({_id:req.query.studyGroupId}, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results);
                }
            })
});

Promise.all([result,viewCount]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'groupData':results[0]
                    });
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
console.log('catch login', e);
}
}


/*
* Create Comment first level
*/
exports.CreateComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.CreateCommentSingleLevel({'_id':req.body.studyGroupId,commentData:[{'userId':results[0],'comment':req.body.comment}]},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
commentResult['userId']={ "_id": "", "firstName": "", "lastName": "", "image": "" };
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'commentData':commentResult
                    });
}
})
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
            res.status(err.httpCode).json(err);
}
}


/*
* Create Comment Nested level
*/
exports.CreateCommentNested = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
var commentNested = new Object();
commentNested.userId = results[0];
commentNested.comment = req.body.comment;
studyGroup.CreateCommentDoubleLevel({'_id':req.body.messageId,'commentData':commentNested},function(err,commentResult) {
console.log(err)    
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created',function (err,newResult) {
    if (err){
console.log('err',err)
    }else{
let commentWithReply = newResult[0].comment.filter(allComment => allComment._id.toString() === req.body.messageId);
let newCommentData =  commentWithReply[0].replyData[commentWithReply[0].replyData.length-1].toObject();
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'comment':{"_id": newCommentData._id, "comment": newCommentData.comment, "userId": { "_id": "", "firstName": "", "": "", "image": "" }, "created": newCommentData.created}
                    });
}
})
}
})
}).catch(function(err) {
console.log('catch err', err);    
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
console.log('catch login', e);
}
}

/*
* Create Comment Nested level
*/
exports.CreateCommentNestedInternal = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
var commentNested = new Object();
commentNested.userId = results[0];
commentNested.comment = req.body.comment;
studyGroup.CreateCommentDoubleLevelInternal({'_id':req.body.messageId,'commentData':commentNested},function(err,commentResult) {
console.log(err)    
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created',function (err,newResult) {
    if (err){
console.log('err',err)
    }else{
let commentWithReply = newResult[0].internalComment.filter(allComment => allComment._id.toString() === req.body.messageId);
let newCommentData =  commentWithReply[0].replyData[commentWithReply[0].replyData.length-1].toObject();
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'comment':{"_id": newCommentData._id, "comment": newCommentData.comment, "userId": { "_id": "", "firstName": "", "": "", "image": "" }, "created": newCommentData.created}
                    });
}
})
}
})
}).catch(function(err) {
console.log('catch err', err);    
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
console.log('catch login', e);
}
}



/*
* Create Comment Nested level
*/
exports.DeleteComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
studyGroup.deleteComment({'conditions':{'_id':req.body.studyGroupId},'data':{ 'comment' : { '_id' : req.body.messageId } }},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{

     return   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    
}
})
}).catch(function(err) {   
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}

/*
* Create Comment Nested level
*/
exports.DeleteCommentInternal = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
studyGroup.deleteComment({'conditions':{'_id':req.body.studyGroupId},'data':{ 'internalComment' : { '_id' : req.body.messageId } }},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{

     return   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    
}
})
}).catch(function(err) {   
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}

/*
* Delete Nested level
*/
exports.DeleteNestedComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    * {'toBeTested.$.thingsTested': 'A3'} req.body.parentMessageId
    */
studyGroup.deleteComment({'conditions':{'_id':req.body.studyGroupId,'comment._id':req.body.parentMessageId},'data':{ 'comment.$.replyData' : {'_id': req.body.messageId}}},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{

     return   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    
}
})
}).catch(function(err) {
console.log(err);
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}


/*
* Delete Nested level
*/
exports.DeleteNestedCommentInternal = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    * {'toBeTested.$.thingsTested': 'A3'} req.body.parentMessageId
    */
studyGroup.deleteComment({'conditions':{'_id':req.body.studyGroupId,'internalComment._id':req.body.parentMessageId},'data':{ 'internalComment.$.replyData' : {'_id': req.body.messageId}}},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{

     return   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    
}
})
}).catch(function(err) {
console.log(err);
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}

/*
* Delete Nested level
*/
exports.AddRequestToStudyGroup = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.addNewMembers({'_id':req.body.studyGroupId,'membersData':[{'userId':results[0],'memberStatus':0}]},function(err,result) {
if (err){
     res.status(500).json({
                        'code': 500,
                        'message': 'Database error.'
                    });
}else{
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
}
})
}).catch(function(err) {
console.log(err);
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}



/*
* Create Comment first level internal
*/
exports.CreateCommentInternal = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.CreateCommentSingleLevelInternal({'_id':req.body.studyGroupId,commentData:[{'userId':results[0],'comment':req.body.comment}]},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
commentResult['userId']={ "_id": "", "firstName": "", "lastName": "", "image": "" };
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'commentData':commentResult
                    });
}
})
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
            res.status(err.httpCode).json(err);
}
}

/*
* Create Comment first level internal
*/
exports.EditComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.EditComment({conditions:{'_id':req.body.studyGroupId,'comment._id':req.body.messageId},update:{$set:{"comment.$.comment":req.body.comment}}},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
commentResult['userId']={ "_id": "", "firstName": "", "lastName": "", "image": "" };
res.status(200).json({
                        'code': 200,
                        
                        'message': 'Sucess.',
                        'commentData':commentResult
                    });
}
})
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
            res.status(err.httpCode).json(err);
}
}


/*
* Create Comment first level internal
*/
exports.EditCommentInternal = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.EditComment({conditions:{'_id':req.body.studyGroupId,'internalComment._id':req.body.messageId},update:{$set:{"internalComment.$.comment":req.body.comment}}},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
commentResult['userId']={ "_id": "", "firstName": "", "lastName": "", "image": "" };
res.status(200).json({
                        'code': 200,
                        
                        'message': 'Sucess.',
                        'commentData':commentResult
                    });
}
})
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
            res.status(err.httpCode).json(err);
}
}

/*
* Create Comment Nested level
*/
exports.LeaveGroup = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
studyGroup.deleteComment({'conditions':{'_id':req.body.studyGroupId},'data':{ 'members' : { 'userId' : results[0] } }},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{

     return   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    
}
})
}).catch(function(err) {   
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}


/*
* Create Comment Nested level
*/
exports.PinnedComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
    let commentInfo = results[1].internalComment.filter(allComment => allComment._id.toString() === req.body.messageId);

    /*
    *results[1].comment[results[1].comment.length-1]._id
    */
studyGroup.NoticeComment({'_id':req.body.studyGroupId,noticeData:[{'commentId':req.body.messageId,'commentData':commentInfo}]},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
       res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'data':commentResult
                    });
            studyGroup.EditComment({conditions:{'_id':req.body.studyGroupId,'internalComment._id':req.body.messageId},update:{$set:{"internalComment.$.isNoticed":true}}}, function(err, results) {
                if (err) {
                    console.log('err',err)
                } else {
                    console.log('Success')
                }
            })
        

}
})
}).catch(function(err) {   
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}

/*
* Create Comment Nested level
*/
exports.UnPinnedComment = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        });
var result = new Promise(function(resolve, reject) {
            studyGroup.findByParamsPagination({_id:req.body.studyGroupId},0, '-created', function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
studyGroup.NoticeComment({'_id':req.body.studyGroupId,noticeData:[{'commentId':req.body.messageId,'commentData':commentInfo}]},function(err,commentResult) {
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not found'
                    });
}else{
       res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'data':commentResult
                    });
            studyGroup.EditComment({conditions:{'_id':req.body.studyGroupId,'internalComment._id':req.body.messageId},update:{$set:{"internalComment.$.isNoticed":true}}}, function(err, results) {
                if (err) {
                    console.log('err',err)
                } else {
                    console.log('Success')
                }
            })
        

}
})
}).catch(function(err) {   
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
    return res.status(err.httpCode).json(err);
}
}


exports.demotest = (req, res) => {
const fetch = require('node-fetch');
fetch('https://stackoverflow.com/questions/578095/how-to-get-data-with-javascript-from-another-server')
    .then(function(resss) {
console.log(resss.json());
    }).then(function(body) {
        console.log(body);
    });
}