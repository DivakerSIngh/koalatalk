"use strict"

/*
* Create Study group
*/
exports.createBulletinGroup = (req, res) => {
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
        var lastRecord = new Promise(function(resolve, reject) {
            Bulletin.findByParamsPagination({},0, '-created', function(err, lastBulletinInfo) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                lastBulletinInfo.length ? resolve(lastBulletinInfo[0].autoIncrementId + 1) : resolve(1000);
                }
            });
        });
       Promise.all([jwtAuth,lastRecord]).then(function(results) {
       let saveData = {};
       	saveData['userId']=results[0];
       	saveData['title']=req.body.title;
       	saveData['category']=req.body.categoryId;
       	saveData['language']=req.body.language;
       	saveData['description']=req.body.description;
        saveData['autoIncrementId']=results[1];
        saveData['type']=0;                
        saveData['created']=new Date();
        saveData['updated']=new Date();
Bulletin.createBulletin(saveData,function(err,result) {
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
* Create Study group
*/
exports.createBulletinURL = (req, res) => {
try {
    console.log('req.body',req.body)
        var jwtAuth = new Promise((resolve, reject) => {
                jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
                  if (err){
                reject({httpCode: 400,code: 400,message: 'Invalid token!'});
                  }else{
                    resolve(decoded.id)
                  }
                });
        })
        var lastRecord = new Promise(function(resolve, reject) {
            Bulletin.findByParamsPagination({},0, '-created', function(err, lastBulletinInfo) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                lastBulletinInfo.length ? resolve(lastBulletinInfo[0].autoIncrementId + 1) : resolve(1000);
                }
            });
        });
       Promise.all([jwtAuth,lastRecord]).then(function(results) {
       let saveData = {};
        saveData['userId']=results[0];
        saveData['title']=req.body.title;
        saveData['category']=req.body.categoryId;
        saveData['description']=req.body.description;
        saveData['autoIncrementId']=results[1];
        saveData['type']=1;
        saveData['url']=req.body.url;                
        saveData['created']=new Date();
        saveData['updated']=new Date();
Bulletin.createBulletin(saveData,function(err,result) {
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

exports.UrlFtch = (req, res) => {
    try {
UrlFetch(req.query.url, function(error, metadata){
if (error){
console.log('error',error)
return res.status(200).json({httpCode: 200,code: 404,message: 'Could Not fetch url'});    
}else{
         res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'title':metadata.general.title,
                        'description':metadata.general.description
                    });

}
});
    } catch (e) {
return res.status(500).json(e);
    }
}

exports.GetBulletin = (req, res) => {
    try {      
let param = {};
req.query.search !== '' ?param = {$or:[{"title":new RegExp(".*"+req.query.search+".*","i")},{"language":new RegExp(".*"+req.query.search+".*","i")}]}:'';
req.query.language !== '' ? param['language'] = req.query.language :'';
req.query.category !== '0' ? param['category'] = req.query.category :'';
let sortParam = '-created';
var result = new Promise(function(resolve, reject) {
            Bulletin.findByParamsPagination(param,Number.parseInt(req.query.limit)*10, sortParam, function(err, results) {
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
            Bulletin.countByParams(param, function(err, results) {
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
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'limit':paginationArray,
                        'totalCount':results[1],
                        'Bulletin':results[0]
                    });
param = {}
}).catch(function(err) {
            res.status(err.httpCode).json(err);
            param = {}
        });
    
} catch (e) {
param = {}    
return res.status(500).json(e);
    }
}

exports.ViewBulletin = (req, res) => {
    try {
let param = {};
param['_id'] = req.query.bulletinId;
let sortParam = '-created';
var result = new Promise(function(resolve, reject) {
            Bulletin.findByParamsPagination(param,0, sortParam, function(err, results) {
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
var viwCountBulletin = new Promise(function(resolve, reject) {
            Bulletin.viewBulletin({'_id':req.query.bulletinId,'increment':{ 'view': 1}}, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results==null ? reject({
                        httpCode: 200,
                        code: 404,
                        message: 'Data Not found'
                    }) : resolve(results);
                }
            })
        });
Promise.all([result,viwCountBulletin]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'Bulletin':results[0][0]
                    });
param = {}
}).catch(function(err) {
            res.status(err.httpCode).json(err);
            param = {}
        });
    
    } catch (e) {
param = {}    
return res.status(500).json(e);
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
            Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created', function(err, results) {
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
Bulletin.CreateCommentSingleLevel({'_id':req.body.bulletinId,commentData:[{'userId':results[0],'comment':req.body.comment}]},function(err,commentResult) {
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
            Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created', function(err, results) {
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
Bulletin.deleteComment({'conditions':{'_id':req.body.bulletinId},'data':{ 'comment' : { '_id' : req.body.messageId } }},function(err,commentResult) {
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
            Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created', function(err, results) {
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
                        message: 'Not found'
                    }) : resolve(results[0]);
                }
            })
        });
Promise.all([jwtAuth,result]).then(function(results) {
var commentNested = new Object();
commentNested.userId = results[0];
commentNested.comment = req.body.comment;
Bulletin.CreateCommentDoubleLevel({'_id':req.body.messageId,'commentData':commentNested},function(err,commentResult) {
console.log(err)    
if (err){
res.status(200).json({
                        'httpCode': 200,
                        'code': 404,
                        'message': 'Data Not'
                    });
}else{
Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created',function (err,newResult) {
    if (err){
console.log('err',err)
    }else{        
let commentWithReply = newResult[0].comment.filter(allComment => allComment._id.toString() === req.body.messageId);
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'comment':commentWithReply[0].replyData[commentWithReply[0].replyData.length-1]
                    });
}
})
}
})
}).catch(function(err) {
console.log('catch  errerrerr', err);    
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
console.log('catch login', e);
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
            Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created', function(err, results) {
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
Bulletin.deleteComment({'conditions':{'_id':req.body.bulletinId,'comment._id':req.body.parentMessageId},'data':{ 'comment.$.replyData' : {'_id': req.body.messageId}}},function(err,commentResult) {
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
            Bulletin.findByParamsPagination({_id:req.body.bulletinId},0, '-created', function(err, results) {
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
Bulletin.EditComment({conditions:{'_id':req.body.bulletinId,'comment._id':req.body.messageId},update:{$set:{"comment.$.comment":req.body.comment}}},function(err,commentResult) {
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