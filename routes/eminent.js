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

router.post('/emailService', function(req, res) {
	console.log("helloooo u r in emailservice");
	console.log("helloooo u r in nnbnb emailservice"+req);
    var name= req.body.name;
    console.log("data");
    console.log("name--->"+req.body);
	// var name=req.body.name;
	// var email=req.body.email;
	// var contact=req.body.contact;
	// var message=req.body.message;
	// console.log("email service"+name+" - "+email+" - "+contact + " - "+message);
	// var emailResponse='';
	// emailResponse =emailer.sendMail(name,email,contact,message);	
	// //console.log(emailResponse.value)
	// if(emailResponse=='error')
	// res.json({"status":"error"});
	// else
	// res.json({"status":"success"});

});
 

module.exports = router;
