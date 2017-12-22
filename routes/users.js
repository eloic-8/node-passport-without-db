var express = require('express');
var router = express.Router();
var passport = require("passport");



router.get('/login', function(req, res){
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true,
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  //req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
