"use strict"
exports.adminLogin = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email,
                roleId:roles.superadmin
            }, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 501,
                        code: 501,
                        message: 'email do not exist'
                    }) : resolve(results);
                }
            })
        });
Promise.all([emailCheck]).then(function(results) {
if (bcrypt.compareSync(req.body.password,results[0][0].password)){
var token = jwt.sign({
                        id: results[0][0]._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'token': token,
                        'UserInfo':results[0][0] 
                    });
}else{
res.status(404).json({httpCode: 501,code: 501,message: 'Password do not match.'});
}
}).catch(function(err) {
    console.log('err',err)
            res.status(err.httpCode).json(err);
        });
    } catch (e) {
console.log('errerr',req.body)
    /*
            console.log('e',e)
        res.status(500).json(e);
    */}
}

exports.adminGetUsers = (req, res) => {
    try {      
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{
let param = {};
req.query.search === undefined ?
param = {'roleId':roles.student,'isDelete':false,'status': {$in: [1,2]}} :
param = {'roleId':roles.student,'isDelete':false,'status': {$in: [1,2]},$or:[{"firstName":new RegExp(".*"+req.query.search+".*","i")},{"lastName":new RegExp(".*"+req.query.search+".*","i")},{"email":new RegExp(".*"+req.query.search+".*","i")}]};
req.query.learningLangauge !== undefined ? param['mainlanguage'] = req.query.learningLangauge :'';
req.query.filterStatus !== undefined ? param['status'] = req.query.filterStatus :'';
req.query.filterdateFrom !== undefined ? param['created'] = {$gte: new Date(Number.parseInt(req.query.filterdateFrom)),$lt: new Date(Number.parseInt(req.query.filterDateTo))} :'';
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
            userDb.findByParamsPagination(param,Number.parseInt(req.query.limit)*10, sortParam, function(err, results) {
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
            userDb.countByParams(param, function(err, results) {
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
                        'UserInfo':results[0]
                    });
param = {}
}).catch(function(err) {
            res.status(err.httpCode).json(err);
            param = {}
        });
    }
});
} catch (e) {
param = {}    
return res.status(500).json(e);
    }
}

exports.adminGetTeachers = (req, res) => {
    try {
//console.log(Number.parseInt(req.query.limit)*10)        
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{
let param = {};
req.query.search === undefined ?
param = {'roleId':roles.teacher,'isDelete':false,'status': {$in: [1,2]}} :
param = {'roleId':roles.teacher,'isDelete':false,'status': {$in: [1,2]},$or:[{"firstName":new RegExp(".*"+req.query.search+".*","i")},{"lastName":new RegExp(".*"+req.query.search+".*","i")},{"email":new RegExp(".*"+req.query.search+".*","i")}]};
req.query.learningLangauge !== undefined ? param['mainlanguage'] = req.query.learningLangauge :'';
req.query.filterStatus !== undefined ? param['status'] = req.query.filterStatus :'';
req.query.filterdateFrom !== undefined ? param['created'] = {$gte: new Date(Number.parseInt(req.query.filterdateFrom)),$lt: new Date(Number.parseInt(req.query.filterDateTo))} :'';
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
            userDb.findByParamsPagination(param,Number.parseInt(req.query.limit)*10, sortParam,function(err, results) {
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
            userDb.countByParams(param, function(err, results) {
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
                        'UserInfo':results[0]
                    });
}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });
    }
});
} catch (e) {  
return res.status(500).json(e);
    }
}

exports.adminUserStatus = (req, res) => {
try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

var userInfo = new Promise((resolve, reject) => {
userDb.findByParams({_id:req.body.userId}, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    savaData['_id'] = decoded[0].id;
    savaData['status'] = Number.parseInt(req.body.newStatus);
    resolve(decoded)
  }
});
});

Promise.all([jwtAuth,userInfo]).then(values => {
userDb.Update(savaData, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'Status updated successfully.',
                                code: 200
                            });
                        }
                    })
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }
}

exports.adminTeacherStatus = (req, res) => {
try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

var userInfo = new Promise((resolve, reject) => {
userDb.findByParams({_id:req.body.teacherId,'roleId':roles.teacher,'isDelete':false,'status': {$in: [1,2]}}, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    savaData['_id'] = decoded[0].id;
    savaData['status'] = Number.parseInt(req.body.newStatus);
    resolve(decoded)
  }
});
});

Promise.all([jwtAuth,userInfo]).then(values => {
userDb.Update(savaData, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'Status updated successfully.',
                                code: 200
                            });
                        }
                    })
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }


}

exports.getUserInfo = (req, res) => {
try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

var userInfo = new Promise((resolve, reject) => {
userDb.findByParams({_id:req.query.userId,'roleId':roles.student,'isDelete':false,'status': {$in: [1,2]}}, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
                    !decoded.length ? reject({
                        httpCode: 501,
                        code: 501,
                        message: 'User do not exist'
                    }) : resolve(decoded);
  }
});
});

Promise.all([jwtAuth,userInfo]).then(values => {
return res.status(200).json({message: 'User info Sucess.',code:200 ,userInfo:values[1]});
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }
}
exports.getTeacherInfo = (req, res) => {
try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

var userInfo = new Promise((resolve, reject) => {
userDb.findByParams({_id:req.query.teacherId,'roleId':roles.teacher,'isDelete':false,'status': {$in: [1,2]}}, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
                    !decoded.length ? reject({
                        httpCode: 501,
                        code: 501,
                        message: 'User do not exist'
                    }) : resolve(decoded);
  }
});
});

Promise.all([jwtAuth,userInfo]).then(values => {
return res.status(200).json({message: 'User info Sucess.',code:200 ,userInfo:values[1]});
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }

}

exports.adminNewApplication = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{
let param = {};
req.query.search === undefined ?
param = {'isApproved':false,'finialStep':1,'roleId':roles.teacher} :
param = {'isApproved':false,'finialStep':1,'roleId':roles.teacher,$or:[{"firstName":new RegExp(".*"+req.query.search+".*","i")},{"lastName":new RegExp(".*"+req.query.search+".*","i")},{"email":new RegExp(".*"+req.query.search+".*","i")}]};
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
            userDb.findByParamsPagination(param, Number.parseInt(req.query.limit)*10, sortParam, function(err, results) {
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
            userDb.countByParams(param, function(err, results) {
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
                        'UserInfo':results[0]
                    });
param = {}
}).catch(function(err) {
    console.log(err)
            res.status(err.httpCode).json(err);
        });
    }
});
} catch (e) {
    console.log(e)
return res.status(500).json(e);
    }
}


exports.getTeacherApplicationInfo = (req, res) => {
try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

var userInfo = new Promise((resolve, reject) => {
userDb.findByParams({_id:req.query.teacherId,'roleId':roles.teacher}, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
                    !decoded.length ? reject({
                        httpCode: 501,
                        code: 501,
                        message: 'User do not exist'
                    }) : resolve(decoded);
  }
});
});

Promise.all([jwtAuth,userInfo]).then(values => {
return res.status(200).json({message: 'User info Sucess.',code:200 ,userInfo:values[1]});
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }

}

exports.adminRejectApplication = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{
let param = {'_id':req.body.teacherId,'isApproved':false,'roleId':roles.teacher};
var result = new Promise(function(resolve, reject) {
            userDb.findByParams(param, function(err, results) {
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
Promise.all([result]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
userDb.deleteUser(param, function(err, results) {
    if (err) {
console.log('--------------------',err)
    } else {
        console.log('Sucess Approved')
    }
});

}).catch(function(err) {
            res.status(err.httpCode).json(err);
            param = {}
        });
    }
});
} catch (e) {
return res.status(500).json(e);
    }
}

exports.adminApproveApplication = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{
let param = {'_id':req.body.teacherId,'isApproved':false,'finialStep':1,'roleId':roles.teacher};
var result = new Promise(function(resolve, reject) {
            userDb.findByParams(param, function(err, results) {
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
Promise.all([result]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
param['isApproved']=true;
param['status']=1;
param['finialStep']=2;
userDb.Update(param, function(err, results) {
    if (err) {
console.log('--------------------',err)
    } else {
        console.log('Sucess Approved')
    }
});

}).catch(function(err) {
            res.status(err.httpCode).json(err);
            param = {}
        });
    }
});
} catch (e) {
return res.status(500).json(e);
    }
}

exports.adminUpdateInfo = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{    
let param = {'_id':decoded.id,'image':req.body.image,'email':req.body.email,'firstName':req.body.firstName,'lastName':req.body.lastName};
var result = new Promise(function(resolve, reject) {
            userDb.findByParams({'_id':decoded.id}, function(err, results) {
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
Promise.all([result]).then(function(results) {
userDb.Update(param, function(err, Updateresult) {
    if (err) {
console.log('--------------------',err)
    } else {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'data':Updateresult
                    });
    }
});
}).catch(function(err) {
console.log('err',err)    
            res.status(err.httpCode).json(err);
        });
    }
});
} catch (e) {
console.log(e)    
return res.status(500).json(e);
    }
}

exports.adminUpdatePassword = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(404).json({'httpCode': 400,'code': 400,'message': 'Invalid token!'});
  }else{    
let param = {'_id':decoded.id};
var result = new Promise(function(resolve, reject) {
            userDb.findByParams({'_id':decoded.id}, function(err, results) {
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

        var passwordEncryption = new Promise(function(resolve, reject) {
            resolve(bcrypt.hashSync(req.body.newPassword, 8));
        });
Promise.all([result,passwordEncryption]).then(function(results) {
if (bcrypt.compareSync(req.body.oldPassword,results[0][0].password)){
var token = jwt.sign({
                        id: results[0][0]._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
param['password']=results[1];
userDb.Update(param, function(err, results) {
    if (err) {
console.log('--------------------',err)
    } else {
   res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });
    }
});
}else{
return res.status(404).json({httpCode: 501,code: 501,message: 'Password does not match.'});
}
}).catch(function(err) {
            res.status(err.httpCode).json(err);
        });
    }
});
} catch (e) {
return res.status(500).json(e);
    }
}


exports.deleteBulletin = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    resolve(decoded)
  }
});
});

Promise.all([jwtAuth]).then(values => {
Bulletin.DeleteBulletin({_id:req.body.bulletinId}, function(err, decoded) {
  if (err){
return res.status(200).json({httpCode: 400,code: 400,message: 'Invalid token!'});
}else{
return res.status(200).json({message: 'Sucess.',code:200,httpCode: 200});
}
});
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
    } catch (e) {
        console.log('catch profileNew');
    }

}

exports.Bulletins = (req, res) => {
try {
let param = {};
req.query.search === '' ?
param = {} :
param = {$or:[{"title":new RegExp(".*"+req.query.search+".*","i")},{"category":new RegExp(".*"+req.query.search+".*","i")}]};
req.query.filterdateFrom !== '' ? param['created'] = {$gte: new Date(Number.parseInt(req.query.filterdateFrom)),$lt: new Date(Number.parseInt(req.query.filterDateTo))} :'';
(req.query.language !== '0') ? param['language'] = req.query.language :'';
(req.query.category !== '0') ? param['category'] = req.query.category :'';
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
    Bulletin.findByParamsPagination(param,Number.parseInt(req.query.limit)*10, sortParam, function(err, results) {
        if (err) {
            console.log('errerr',err)
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
let limit = Number.parseInt(req.query.limit);
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'limit':paginationArray,
                        'totalCount':results[1],
                        'bulletins':results[0]
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

exports.Bulletin = (req, res) => {
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
Promise.all([result]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.',
                        'Bulletin':results[0][0]
                    });
}).catch(function(err) {
            res.status(err.httpCode).json(err);
        });
    
    } catch (e) {
return res.status(500).json(e);
    }
}

exports.AdminFindStudyGroups = (req, res) => {
try {
let param = {};
req.query.search === '' ?
param = {} :
param = {$or:[{"name":new RegExp(".*"+req.query.search+".*","i")},{"category":new RegExp(".*"+req.query.search+".*","i")},{"subCategory":new RegExp(".*"+req.query.search+".*","i")}]};
req.query.filterdateFrom !== '' ? param['created'] = {$gte: new Date(Number.parseInt(req.query.filterdateFrom)),$lt: new Date(Number.parseInt(req.query.filterDateTo))} :'';
(req.query.language !== '0') ? param['language'] = req.query.language :'';
(req.query.category !== '0') ? param['category'] = req.query.category :'';
let sortParam = (req.query.sortType==='0'?'':'-')+req.query.sortKey;
var result = new Promise(function(resolve, reject) {
    studyGroup.findByParamsPagination(param,Number.parseInt(req.query.limit)*10, sortParam, function(err, results) {
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
let limit = Number.parseInt(req.query.limit)*10;
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

exports.AdminFindStudyGroup = (req, res) => {
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
Promise.all([result]).then(function(results) {
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


exports.DeleteStudyGroup = (req, res) => {
try {
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
Promise.all([result]).then(function(results) {
res.status(200).json({
                        'code': 200,
                        'message': 'Sucess.'
                    });


            studyGroup.DeleteStudyGroup({_id:req.body.studyGroupId}, function(err, results) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('results delete successfully')
                }
            })


}).catch(function(err) {
            res.status(err.httpCode).json(err);
                    });

} catch (e) {
console.log('catch login', e);
}
}