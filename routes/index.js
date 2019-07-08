var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/sobre', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET protocol page. */
router.get('/protocolo', function(req, res, next) {
  res.render('protocol', { title: 'Express' });
});

/* GET chat page. */
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});



module.exports = router;
