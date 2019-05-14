const express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
env = require('dotenv').config();
global.jwt = require("jsonwebtoken");
global.sendgridHelper = require('sendgrid').mail;
global.sendgridObj = require('sendgrid')('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');/* All config set to be in env file and then no need to hardcode it.*/
global.bcrypt = require('bcryptjs');
global.multiparty = require('multiparty');
global.path = require('path');
global.nodemailer = require('nodemailer');
global.smtpTransport = require('nodemailer-smtp-transport');
global.fs = require('fs');
global.UrlFetch = require('html-metadata');
global.config = require("./helpers/config")(); /* All config set to be in env file and then no need to hardcode it.*/
global.roles = require("./helpers/roles");
global.ExternalService = require("./helpers/common-service");
global.userDb = require("./models/users");
global.Mail = require('./models/mails');
global.accessToken = require("./models/accessTokens");
global.studyGroup = require("./models/studyGroup");
global.Bulletin = require("./models/bulletins");
global.CodesAndMessages = require("./helpers/error-sucess-codes-messages");
mongoose.Promise = global.Promise;
// Connect to the beerlocker MongoDB
mongoose.connect(config.DB_URL);
const apiUsers = require('./apiroutes/users')(router);
const apiTutor = require('./apiroutes/tutor')(router);
const apiAdmin = require('./apiroutes/admin')(router);
const apiStudyGroup = require('./apiroutes/studyGroups')(router);
const apiBulletin = require('./apiroutes/bulletin')(router);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, authtoken, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "*");
    console.log('--------------------------------request Details----------------------------------------', req.originalUrl);
    console.log('auth-token', req.headers['auth-token']);
    console.log('authorization', req.headers['authorization']);
    console.log('user-agent', req.body);
    console.log('-----------------------------------------ENDS------------------------------------------');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
});
app.use('/api/users', apiUsers);
app.use('/api/tutor', apiTutor);
app.use('/api/admins', apiAdmin);
app.use('/api/study-group', apiStudyGroup);
app.use('/api/bulletins', apiBulletin);
app.use('/images-view',express.static(path.join(__dirname, 'public/')));
// catch 404 and forward to error handler

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use(express.static(path.join(__dirname, 'admin')));
app.get('admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/index.html'));
});   




app.use(function (req, res, next) {
    const err = new Error('Bad Request');
    err.status = 400;
    res.json({message: 'Bad Request', code: 400, result: {}});
    return;
});

process.on('uncaughtException', function (err) {
    console.log(err);

});
module.exports = app;