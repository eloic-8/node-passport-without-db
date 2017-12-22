var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', loggedIn, function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'Elogin' });
});

function loggedIn(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.redirect('/users/login');
  }
}

module.exports = router;
