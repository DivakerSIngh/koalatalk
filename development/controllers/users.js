"use strict"
exports.login = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email
            }, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({'httpCode': 200,'code': 510,'message': 'Email or password may be wrong!'}) : resolve(results);
                }
            })
        });

        var passwordEncryption = new Promise(function(resolve, reject) {
            console.log(bcrypt.hashSync(req.body.password, 8))
            resolve(bcrypt.hashSync(req.body.password, 8));
        });

       Promise.all([emailCheck, passwordEncryption]).then(function(results) {
if (!results[0].length){
    return res.status(200).json({'httpCode': 500,'code': 500,'message': 'Database error'});
}


if (!bcrypt.compareSync(req.body.password, results[0][0].password)){
    return res.status(200).json({'httpCode': 200,'code': 510,'message': 'Password is not match.'});
}

if (results[0][0].status===0){
    return res.status(200).json({'httpCode': 200,'code': 511,'message': 'Your registration is not complete.',data:results[0]});
}

if (results[0][0].isApproved===false && results[0][0].roleId===3){
    return res.status(200).json({'httpCode': 200,'code': 514,'message': 'Your registration is not approved by admin till now.',data:results[0]});
}


if (results[0][0].status===2){
    return res.status(200).json({'httpCode': 200,'code': 512,'message': 'Your account block by admin. Please fill the contact us form.',data:results[0]});
}

if (results[0][0].roleId!==Number.parseInt(req.body.loginType)){
    return res.status(200).json({'httpCode': 200,'code': 513,'message': 'You are not registered with this account type.',data:results[0]});
}

if ((results[0][0].status===1)){
    var token = jwt.sign({
                        id: results[0][0]._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
    return res.status(200).json({'httpCode': 200,'code': 200,'message': 'Successfully login','data':results[0],'authtoken':token});
}

}).catch(function(err) {
console.log('err',err)    
            res.status(err.httpCode).json(err);
        });        

    } catch (e) {
        console.log('catch login', e);
    }
}

exports.registration = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email
            }, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    results.length ? reject({
                        httpCode: 501,
                        code: 501,
                        message: 'User already exist'
                    }) : resolve(true);
                }
            })
        });

        var lastRecord = new Promise(function(resolve, reject) {
            userDb.findOne({}, {}, {
                sort: {
                    'created': -1
                }
            }, function(err, lastUserInfo) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    lastUserInfo ? resolve(lastUserInfo.autoIncrementId + 1) : resolve(1);
                }
            });
        });

        var passwordEncryption = new Promise(function(resolve, reject) {
            resolve(bcrypt.hashSync(req.body.password, 8));
        });

        Promise.all([emailCheck, lastRecord, passwordEncryption]).then(function(results) {
            userDb.createUser({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    autoIncrementId: results[1],
                    roleId: req.body.loginType,
                    created: new Date(),
                    updated: new Date(),
                    password: results[2],
                    isDelete: false
                },
                function(err, user) {
                    if (err) return res.status(500).send("There was a problem registering the user.")
                    var token = jwt.sign({
                        id: user._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
                    res.status(200).json({
                        'code': 200,
                        'message': 'Registration sucess.',
                        'token': token,
                        'UserInfo':user 
                    });
if (req.body.isSocial==='false'){ 
ExternalService.mailGun({'email':user.email,'templetename':'email-verify'},{'{link}':req.body.loginType==='4'?'http://52.8.169.78:7112/student/profile/'+token:'http://52.8.169.78:7112/teacher/generalprofile/'+token})
}
                });
        }).catch(function(err) {
            res.status(err.httpCode).json(err);
        });
    } catch (e) {
        res.status(500).json(e);
    }
}


exports.reSendLink = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email
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
                        message: 'User do not  exist'
                    }) : resolve(results[0]);
                }
            })
        });

        Promise.all([emailCheck]).then(function(results) {
            var token = jwt.sign({
                        id: results[0]._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
                    res.status(200).json({
                        'code': 200,
                        'message': 'Successfully send email.',
                    });
ExternalService.mailGun({'email':results[0].email,'templetename':'email-verify'},{'{link}':results[0].loginType==='4'?'http://52.8.169.78:7112/student/profile/'+token:'http://52.8.169.78:7112/teacher/generalprofile/'+token})
        }).catch(function(err) {
            res.status(err.httpCode).json(err);
        });
    } catch (e) {
        res.status(500).json(e);
    }
}

exports.forgotPassword = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email,
                roleId:{'$nin': [1,2]},
                isDelete:false,
            }, function(err, results) {
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
                        message: 'This email is not register with us.'
                    }) : resolve(results[0]);
                }
            })
        });
        Promise.all([emailCheck]).then(function(results) {
                    res.status(200).json({
                        httpCode: 200,
                        code: 200,
                        message: 'Please check your email.'
                    });
/*
Send it on user email 
expires in 1 hours
*/
let accessTokenNew  =  jwt.sign({id: results[0]._id}, config.secret, {expiresIn: 1200})
accessToken.createToken({'userId':results[0]._id,'accesstoken':accessTokenNew,'created':new Date(),'updated':new Date(),'isDelete':false},function(CreateTokenErr,CreateTokenRes) {
if (CreateTokenErr){
 console.log('CreateTokenErr',CreateTokenErr)
}else{
ExternalService.mailGun({'email':req.body.email,'templetename':'forgot-password'},{'{link}':'http://52.8.169.78:7112/forgot/'+CreateTokenRes._id})
}
})
        }).catch(function(err) {
        console.log('errerr',err)
            res.status(err.httpCode).json(err);
        });
    } catch (e) {
        console.log('e',e)
        res.status(500).json(e);
    }
}


exports.resetPassword = (req, res) => {
    try {

        var emailToken = new Promise(function(resolve, reject) {
            accessToken.findByParams({
                _id: req.body.token
            }, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 200,
                        message: 'Wrong token your email.'
                    }) : resolve(results[0]);
                }
            })
        });

        var passwordEncryption = new Promise(function(resolve, reject) {
            resolve(bcrypt.hashSync(req.body.newpassword, 8));
        });

        Promise.all([emailToken,passwordEncryption]).then(function(results) {
/*                    res.status(200).json({
                        httpCode: 200,
                        code: 200,
                        message: 'Please check your email.'
                    });*/

userDb.Update({_id:results[0].userId,'password':results[1]}, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'Password updated successfully.',
                                code: 200,
                                data:updateRes
                            });
                        }
                    })



        }).catch(function(err) {
        console.log('errerr',err)
            res.status(err.httpCode).json(err);
        });
    
    } catch (e) {
        res.status(500).json(e);
    }
}

/* 
* Image send.
*
*/

exports.imageUpload = (req, res) => {
try {
var form = new multiparty.Form();
form.parse(req, function(err, rawBody, files){
console.log(rawBody,'files',files); 
const savaData = {};
var imageProcessing = new Promise((resolve, reject) => {
    if((files.userImage) && files.userImage.length > 0) {
        var fileName = '';
        var newfilename = '';
        var ext = '';
        fileName = files.userImage[0].originalFilename;
        ext = path.extname(fileName);
        newfilename = Date.now() + ext;
fs.readFile(files.userImage[0].path, function(err, fileData) {
    if (err) {
        console.log('read err')    
//        reject({code: constant.server_error_code,message: constant.server_error_msg});
    }
    var pathNew = config.user_profile_image_path + newfilename;
    fs.writeFile(pathNew, fileData, function(err) {
        if (err) {
        console.log('write err',err)                
 //           reject({code: constant.server_error_code,message: constant.server_error_msg});
        }
        savaData['image'] = 'http://52.8.169.78:7112/images-view/' + newfilename;
        resolve();
    });
});
}
else{
    savaData['image'] = rawBody && (rawBody.image) && rawBody.image[0] || '';
    resolve();
}
});


var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject(err);
  }else{
    savaData['_id'] = decoded.id;
    savaData['profileStepOne'] = true;
    resolve(decoded)
  }
});
})

Promise.all([imageProcessing,jwtAuth]).then(values => {
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
                                message: 'Image updated successfully.',
                                code: 200,
                                data:updateRes
                            });
                        }
                    })
}).catch(reason => {
console.log(reason)    
res.status(200).json(reason);
});
})
} catch (e) {
console.log('catch profileNew',e);
}
}

/*
* User info
*
*/

exports.viewUserInfo = (req, res) => {
    try {        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
console.log('err',err)
reject({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
    resolve(decoded.id)
  }
});
})
/* Need to apply more check. */
Promise.all([jwtAuth]).then(values => {
userDb.findByParams({_id:values[0]}, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'User info.',
                                code: 200,
                                data:updateRes
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


exports.countryWithTimeZone = (req, res) => {
    try {
      return res.status(200).json({message: 'counrty list with time Zone',code: 200,data:ExternalService.timeZone()});
    } catch (e) {
        console.log('catch profileNew');
    }
}

exports.countryLanguage = (req, res) => {
    try {
      return res.status(200).json({message: 'counrty list with time Zone',code: 200,data:[{'counrty':'English'},{'counrty':'Spanish'},{'counrty':'Hindi'},{'counrty':'Chinese'},{'counrty':'Korean'},{'counrty':'Japanese'}]});
    } catch (e) {
        console.log('catch profileNew');
    }
}


exports.editLanguage = (req, res) => {
    try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject(err);
  }else{
let timeZoneData = ExternalService.timeZone();
let obj = timeZoneData.find(o => o.name === req.body.counrty);
    savaData['_id'] = decoded.id;
    savaData['profileStepTwo'] = true;
    savaData['languages'] = req.body.language.split(',');
    savaData['counrty'] = req.body.counrty;
    savaData['timeZone'] = obj.offsetStr;
    resolve(decoded)
  }
});
})

Promise.all([jwtAuth]).then(values => {
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
                                message: 'Image updated successfully.',
                                code: 200,
                                data:updateRes
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

/*
* Main language
*/
exports.mainLanguage = (req, res) => {
    try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
    savaData['_id'] = decoded.id;
    savaData['profileStepThree'] = true;
    savaData['mainlanguage'] = req.body.mainlanguage;
    savaData['rate'] = req.body.rate;
    resolve(decoded)
  }
});
})

Promise.all([jwtAuth]).then(values => {
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
                                message: 'Image updated successfully.',
                                code: 200,
                                data:updateRes
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

/*
* Main language
*/
exports.interests = (req, res) => {
    try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
    savaData['_id'] = decoded.id;
    resolve(decoded)
  }
});
})

Promise.all([jwtAuth]).then(values => {

    let dataGrid = [{'_id':1,'imageUrl':'http://s3-ap-southeast-2.amazonaws.com/s3.kidslink.co.nz/wp-content/uploads/2015/03/communication-skills-eye-contact.jpg','name':'FREE TALKING','innerData':[{'_id':1,'name':'Travel'},{'_id':2,'name':'Sports'},{'_id':3,'name':'Reading'},{'_id':4,'name':'Cooking'},{'_id':4,'name':'Entertainment'}]},{'_id':2,'imageUrl':'https://i1.wp.com/www.godsownheart.com/wp-content/uploads/2016/09/Topic-Study.jpg','name':'TOPIC STUDY','innerData':[{'_id':5,'name':'Politics'},{'_id':6,'name':'Business'},{'_id':7,'name':'Tech'},{'_id':8,'name':'Social'}]},{'_id':3,'imageUrl':'http://successielts.com/wp-content/uploads/2015/10/How-to-Prepare-for-the-IELTS-Speaking-Test.jpg','name':'SPEAKING TEST','innerData':[{'_id':9,'name':'Opic'},{'_id':10,'name':'TOEFL'},{'_id':11,'name':'TOEIC'},{'_id':12,'name':'IELTS'}]},{'_id':4,'imageUrl':'http://info.shine.com/media/images/876/8876/nervousinterview_large.jpg','name':'INTERVIEW PREPARATION','innerData':[{'_id':13,'name':'Job'},{'_id':14,'name':'MBA'},{'_id':15,'name':'Graduate'},{'_id':16,'name':'Undergraduate'}]}];


userDb.findByParams(savaData, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'User info',
                                code: 200,
                                data:updateRes,
                                dataGrid:dataGrid
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


/*
* Save Interests
*/
exports.saveInterests = (req, res) => {

    try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    savaData['_id'] = decoded.id;
    savaData['profileStepFour'] = true;
    savaData['status'] = 1;
    savaData['interests'] = req.body.interests.split(',');
    savaData['purpose'] = req.body.purpose;
    savaData['additionalInfo'] = req.body.additionalinfo?req.body.additionalinfo:'';
    savaData['parantInterest'] = req.body.parantInterest.split(',')?req.body.parantInterest.split(','):'1';
    resolve(decoded)
  }
});
})
Promise.all([jwtAuth]).then(values => {
  console.log(savaData,'jwtAuth',jwtAuth)  
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
                                message: 'Image updated successfully.',
                                code: 200,
                                data:updateRes
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

/*
* Header Check
*/
exports.headerCheck = (req, res) => {
try {
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
     resolve(decoded)
  }
});
})
Promise.all([jwtAuth]).then(values => {
userDb.findByParams({'_id':values[0].id,$or:[{'profileStepOne':false}, {'profileStepTwo':false}, {'profileStepThree':false}, {'profileStepFour':false}]}, function(updateErr, updateRes) {
                        if (updateErr) {
                            res.status(504);
                            res.send({
                                message: 504,
                                code: 'Database err.'
                            });
                        } else {
                            res.status(200);
                            res.send({
                                message: 'User info',
                                code: 200,
                                headerStatus:(updateRes.length?false:true)
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



exports.admin = (req, res) => {
    try {
        console.log('try profileNew',req.body);
    } catch (e) {
        console.log('catch profileNew');
    }
}


exports.socialLogin = (req, res) => {
    try {
        var emailCheck = new Promise(function(resolve, reject) {
            userDb.findByParams({
                email: req.body.email
            }, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 200,
                        message: 'User Not exist.'
                    }) : resolve(results);
                }
            })
        });

        Promise.all([emailCheck]).then(function(results) {
                    var token = jwt.sign({
                        id: results[0][0]._id
                    }, config.secret, {
                        expiresIn: 2592000 // expires in 24 hours
                    });
                    return res.status(200).json({
                        'code': 201,
                        'message': 'Sucess.',
                        'token': token,
                        'UserInfo': results[0]
                    });
        }).catch(function(err) {
            res.status(err.httpCode).json(err);
        });
    } catch (e) {
        res.status(500).json(e);
    }
}

exports.socialImageFetch = (req, res) => {
    try {
let savaData = {};
var imageFromGoogle = new Promise((resolve, reject) => {
if (req.body.imageUrl && (req.body.imageUrl !== '')){
savaData['image'] = req.body.imageUrl;    
resolve(req.body.imageUrl);
var fileName = '';
var newfilename = '';
var ext = '';
ext = path.extname(req.body.imageUrl);
newfilename = 'user_image' + Date.now() + ext;
var pathNew = config.user_profile_image_path + newfilename;
request(req.body.imageUrl).pipe(fs.createWriteStream(pathNew)).on('close', function() {
    resolve(config.userProfilePathView + newfilename);
});
}else{
    reject({httpCode: 400,code: 400,message: 'Invalid images url!'});
}
});

var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
    savaData['_id'] = decoded.id;
     resolve(decoded)
  }
});
})

Promise.all([imageFromGoogle,jwtAuth]).then(function(results) {
            res.status(200).json({
                'code': 200,
                'message': 'Sucess.',
                'imageUrl': results[0]
            });

userDb.Update(savaData, function(updateErr, updateRes) {
                        if (updateErr) {
                            console.log('updateErr',updateErr)
                         } else {
                            console.log('updateRes')
                         }
                    })
}).catch(function(err) {
    res.status(err.httpCode).json(err);
});
    } catch (e) {
        res.status(500).json(e);
    }
}


exports.searchFriends = (req, res) => {
    try {
  

var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
       return res.status(400).json({'code': 400,'message': 'Invalid token!'});
  }else{
        var UserInfo = new Promise(function(resolve, reject) {
            userDb.findByParams({"status":1,"_id":{'$nin': [decoded.id]}}, function(err, results) {
                if (err) {
                    reject({
                        httpCode: 500,
                        code: 500,
                        message: 'Database error'
                    })
                } else {
                    !results.length ? reject({
                        httpCode: 200,
                        code: 200,
                        message: 'Please check your email.'
                    }) : resolve(results);
                }
            })
        });

Promise.all([UserInfo]).then(function(results) {
            res.status(200).json({
                'code': 200,
                'message': 'Sucess.',
                'data': results[0]
            });
}).catch(function(err) {
    res.status(err.httpCode).json(err);
});


  }
});
})


} catch (e) {
        res.status(500).json(e);
    }
}

exports.test = (req, res) => {
 ExternalService.mailGunTest({'email':'anuj.sharma@appinventiv.com','templetename':'email-verify'},{'{link}':'http://52.8.169.78:7112/student/profile/'+'a;sdlmflksamdf;lksad;lfkjas;ldkjf;lsakdjf;lsakdjf;lakjsdf;lkjsad;lkfja;lskdjf;lksadjfa'})  
}
