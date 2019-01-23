var express = require('express');

var router = express.Router();
var emailer = require('./emailer');


/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Eminent Innovative Infotech' });
res.sendFile('./views/index.html');
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

router.post('/emailService', function(req, res) {
	console.log("emailService called");
	var name=req.body.name;
	var email=req.body.email;
	var mobile=req.body.mobile;
	var course=req.body.course;
	var location=req.body.location;
	var message=req.body.message;
	console.log("email service : "+name+" - "+email+" - "+mobile + " - "+course+ " - "+location+ " - "+message);
	var emailResponse='';
	
	emailResponse =emailer.sendMail(name,email,mobile,course,location,message);	
	console.log("in respones"+emailResponse.value)
	if(emailResponse=='error')
	res.json({"status":"error"});
	else
	res.json({"status":"success"});

});
 

module.exports = router;
