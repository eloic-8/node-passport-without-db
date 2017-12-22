var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy; 
var User = require('../models/user')

module.exports = function(passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });
    
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
      
    passport.use('local', new LocalStrategy(
    function(username, password, done) {
            for(var val of User) {
                if(username == val.username  && password == val.password){
                    return done(null, {username: val.username})     
                }
            }
            return done(null, false);
        }
    ));

    

}

