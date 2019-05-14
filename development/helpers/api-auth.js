// Load required packages
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var config = require("../helpers/config")(); // get config file
passport.use(new BasicStrategy(
    function(username, password, callback) {
        if(config.authUsername === username && config.authPassword === password) {
            return callback(null, true);
        } else {
            return callback(null, false); 
        }
    }
    ));
exports.isAuthenticated = passport.authenticate('basic', { session : false });