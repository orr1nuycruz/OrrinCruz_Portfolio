/* Orrin Cruz - 300898431 
    February 16, 2019--> */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('content', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('content', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('content', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('content', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {
  console.log(req.body);
  res.render('content', { title: 'Home' });
});

router.get('*', function(req, res, next) {
  res.render('content', { title: 'Random Text' });
});

module.exports = router;
