const Joi = require('joi');
exports.login = function (req, res, cb) {
Joi.validate({email: req.body.email,password: req.body.password}, {email: Joi.string().email().required(),password: Joi.string().required()}, (err, value) => { 
if (err){
return res.status(200).json({message: err.details[0].message,code: 401,errorName:err.name});
}else{
cb(null,true)
}
})
}

exports.registration = function (req, res, cb) {
Joi.validate({firstName: req.body.firstName,lastName: req.body.lastName,email: req.body.email,password: req.body.password,loginType: req.body.loginType}, {firstName: Joi.string().alphanum().min(3).max(30).required(),lastName: Joi.string().alphanum().min(3).max(30).required(),email: Joi.string().email().required(),password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),loginType: Joi.any().valid(['3', '4'])}, (err, value) => {
if (err){
console.log(err);
return res.status(200).json({message: err.details[0].message,code: 401,errorName:err.name});
}else{
cb(null,true)
}
})
}

exports.forgotPassword = function (req, res, cb) {
Joi.validate({email: req.body.email}, {email: Joi.string().email().required()}, (err, value) => {
if (err){
console.log(err);
return res.status(200).json({message: err.details[0].message,code: 401,errorName:err.name});
}else{
cb(null,true)
}
})
}

exports.resetPassword = function (req, res, cb) {
Joi.validate({password: req.body.password,resetToken: req.body.resetToken}, {password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),resetToken: Joi.string().min(20).max(50)}, (err, value) => {
if (err){
console.log(err);
return res.status(200).json({message: err.details[0].message,code: 401,errorName:err.name});
}else{
cb(null,true)
}
})
}