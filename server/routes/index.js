let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('partials/content', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('partials/content', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('partials/content', { title: 'Projects' });
});

router.get('/experience', function(req, res, next) {
  res.render('partials/content', { title: 'Experience' });
});

router.get('/contact', function(req, res, next) {
  res.render('partials/content', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {
  console.log(req.body);
  res.render('partials/content', { title: 'Home' });
});


module.exports = router;
