// app/routes.js
module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs'); 
	});

	app.get('/login', function(req, res) {

		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', 
            failureRedirect : '/login', 
            failureFlash : true 
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	app.get('/signup', function(req, res) {
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', 
		failureRedirect : '/signup', 
		failureFlash : true 
	}));


	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user 
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};


function isLoggedIn(req, res, next) {
	
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

//Route to the API
(function() {
    //update page without reloading, req/rec data from server after page has loaded/ send data to server
    var callToAPI = new XMLHttpRequest();
    //get info from api and make it visible to the user
    callToAPI.open("GET", "https://opentdb.com/api.php?amount=10", true);
    //defines a funciton to be called when the readyState property changes
    //readyState holds the status of the XMLHttpRequest-request not initialized, server connection established, 
    //request recieved, processing request, request finished and response is ready
    callToAPI.onreadystatechange = function() {
        //if it is state is ready, the request is done, and everything is ok, then
        if (callToAPI.readyState == XMLHttpRequest.DONE && callToAPI.status == 200) {
            //put the parsed json object in text in categories
            var questions = JSON.parse(callToAPI.responseText).trivia_questions;
            //do a for loop of the categories
            for (var i = 0; i < questions.length; i++) {
                //create a new element "option" and put it in a variable
                var newOption = document.createElement("option");
                //the value prop sets or returns the value of the value attribute of a text field
                newOption.value = questions[i].id;
                //sets or returns the HTML content of an element
                newOption.innerHTML = questions[i].name;
                }
        }
    }
    //sends the request to the server (used for GET and POST)
    callToAPI.send(null);
})();
