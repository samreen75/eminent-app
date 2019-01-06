var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eminent Innovative Infotech' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Eminent Innovative Infotech - About' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Eminent Innovative Infotech - Courses' });
});

router.get('/oServices', function(req, res, next) {
  res.render('oServices', { title: 'Eminent Innovative Infotech - Other Services' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Eminent Innovative Infotech - Blog' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Eminent Innovative Infotech - Contact' });
});


router.get('/pop', function(req, res, next) {
  res.render('pop', { title: 'Eminent Innovative Infotech - pop' });
});


module.exports = router;
