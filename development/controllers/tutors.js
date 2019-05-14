"use strict"
exports.login = (req, res) => {
try {
res.status(200).json({});
} catch (e) {
console.log('catch login',e);
}
}

exports.topTutor = (req, res) => {
try {
var topTutor = new Promise(function(resolve, reject) {
/* 
*Fetch on the base of prority 
*/	
userDb.find({isDelete:false,roleId:roles.teacher}, '_id firstName lastName image', function(err, TutorsInfo) {
if (err){
reject({httpCode:CodesAndMessages.dbErrHttpCode,code:CodesAndMessages.dbErrCode,message:CodesAndMessages.dbErrMessage})
}else{
TutorsInfo.length?resolve(TutorsInfo):reject({httpCode:CodesAndMessages.noRecordFoundHttpCode,code:CodesAndMessages.noRecordFoundCode,message:CodesAndMessages.noRecordFoundMessage});	
}
});
});
Promise.all([topTutor]).then(function(results) {
res.status(200).json({ 'code': 200, 'message': 'List of top Tutors.','tutorsInfo': results[0]});
	}).catch(function(err) {
res.status(err.httpCode).json(err);
});
} catch (e) {
res.status(500).json(e);
}
}


/*
* Tutot info
*
*/

exports.viewTutorInfo = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(200).json({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
var tutor = new Promise(function(resolve, reject) {
userDb.find({'roleId':roles.teacher,'_id':decoded.id}, function(err, TutorsInfo) {
console.log(err)    
console.log(TutorsInfo,decoded.id)    
if (err){
reject({httpCode:CodesAndMessages.dbErrHttpCode,code:CodesAndMessages.dbErrCode,message:CodesAndMessages.dbErrMessage})
}else{
TutorsInfo.length?resolve(TutorsInfo):reject({httpCode:CodesAndMessages.noRecordFoundHttpCode,code:CodesAndMessages.noRecordFoundCode,message:CodesAndMessages.noRecordFoundMessage});	
}
});
});
Promise.all([tutor]).then(function(results) {
res.status(200).json({ 'code': 200, 'message': 'Tutors info.','tutorsInfo': results[0]});
	}).catch(function(err) {
res.status(err.httpCode).json(err);
});
}
});
    } catch (e) {
        console.log('catch profileNew');
    }
}

/*
Upload image from web app.
*/


exports.uploadImage = (req, res) => {
    try {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
return res.status(200).json({httpCode: 400,code: 400,message: 'Invalid token!'});
  }else{
var form = new multiparty.Form();
form.parse(req, function(err, rawBody, files){
var imageProcessing = new Promise((resolve, reject) => {
    if((files.userImage) && files.userImage.length > 0) {
        var fileName = '';
        var newfilename = '';
        var ext = '';
        fileName = files.userImage[0].originalFilename;
        ext = path.extname(fileName);
        newfilename = Date.now() + ext;
//console.log(newfilename);
fs.readFile(files.userImage[0].path, function(err, fileData) {
    if (err) {
        reject({httpCode: 400,code: 400,message: 'try again!'});
    }
    var pathNew = config.user_profile_image_path + newfilename;
    fs.writeFile(pathNew, fileData, function(err) {
        if (err) {
            reject({httpCode: 400,code: 400,message: 'Try again!'});
        }
        resolve('http://52.8.169.78:7112/images-view/' + newfilename);
    });
});
}
else{
    reject({httpCode: 400,code: 400,message: 'image not send!'});
}
});

Promise.all([imageProcessing]).then(function(results) {
res.status(200).json({ 'code': 200, 'message': 'Sucess!.','imageURL': results[0]});
	}).catch(function(err) {
res.status(err.httpCode).json(err);
});

})
}
});
    } catch (e) {
console.log('catch profileNew');
    }
}






/*
* Tutot profile setup first step.
*
*/

exports.setupProfileFirst = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        isDelete: false,
                        roleId: roles.teacher,
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'image':req.body.image,'firstName':req.body.firstName,'lastName':req.body.lastName,'phoneNumber':req.body.phoneNumber,'counrty':req.body.counrty,'timeZone':req.body.timeZone}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                        	console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}


/*
* Main language
*/
exports.tutorInterests = (req, res) => {
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
                                message: 'Tutor info',
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
* Save interest
*/
exports.tutorSaveInterests = (req, res) => {
    try {
let savaData = {};        
var jwtAuth = new Promise((resolve, reject) => {
jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
  if (err){
reject({httpCode: 400,code: 400,message: 'Invalid token!'});  
}else{
    savaData['_id'] = decoded.id;
    savaData['interests'] = req.body.interests.split(',');
    savaData['parantInterest'] = req.body.parantInterest.split(',')?req.body.parantInterest.split(','):'1';
    savaData['teachLanguage'] = req.body.teachLanguage;
    savaData['speakLanguage'] = req.body.speakLanguage;
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
* Tutot profile setup first step.
*
*/

exports.setupEducation = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'education':JSON.parse(req.body.experienceData),'educationDocs':req.body.docs.split(',')}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                            console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
        console.log('catch profileNew',err);                    
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}


/*
* Tutot profile setup first step.
*
*/

exports.setupCertification = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'certification':JSON.parse(req.body.certificationData),'certificationDocs':req.body.docs.split(',')}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                            console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
        console.log('catch profileNew',err);                    
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}


/*
* Work Experience.
*
*/

exports.workExperience = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'workExperience':JSON.parse(req.body.workExperienceData)}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                            console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
        console.log('catch profileNew',err);                    
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}

/*
* Setup Intro.
*
*/

exports.introduction = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'videoLink':req.body.videoLink,'aboutMe':req.body.aboutMe,'videoUrlLink':req.body.videoUrlLink}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                            console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
        console.log('catch profileNew',err);                    
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}

/*
* Setup Time Available Time.
*
*/

exports.setAvailableTime = (req, res) => {
    try {
        jwt.verify(req.headers.authtoken, config.secret, function(err, decoded) {
            if (err) {
                return res.status(200).json({
                    httpCode: 400,
                    code: 400,
                    message: 'Invalid token!'
                });
            } else {
                var tutor = new Promise(function(resolve, reject) {
                    userDb.find({
                        _id: decoded.id
                    }, function(err, TutorsInfo) {
                        if (err) {
                            reject({
                                httpCode: CodesAndMessages.dbErrHttpCode,
                                code: CodesAndMessages.dbErrCode,
                                message: CodesAndMessages.dbErrMessage
                            })
                        } else {
                            TutorsInfo.length ? resolve(TutorsInfo) : reject({
                                httpCode: CodesAndMessages.noRecordFoundHttpCode,
                                code: CodesAndMessages.noRecordFoundCode,
                                message: CodesAndMessages.noRecordFoundMessage
                            });
                        }
                    });
                });
                Promise.all([tutor]).then(function(results) {
                    res.status(200).json({
                        'code': 200,
                        'message': 'Tutors info.',
                        'tutorsInfo': results[0]
                    });
userDb.Update({'_id':results[0][0]._id,'availableTime':JSON.parse(req.body.availableTime),'finialStep':1}, function(updateErr, updateRes) {
                        if (updateErr) {
                    console.log('updateErr',updateErr)
                        } else {
                            console.log('updateRes')
                        }
                    })
                }).catch(function(err) {
        console.log('catch profileNew',err);                    
                    res.status(err.httpCode).json(err);
                });
            }
        });
    } catch (e) {
        console.log('catch profileNew');
    }
}