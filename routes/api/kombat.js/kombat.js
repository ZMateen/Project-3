const axios = require("axios");
const router = require("express").Router();
var db = require("../models")  //requiring model which is the table from mySQL works if we are using sequelize
require("./routes/api-routes.js")(app); //feeding the express app variable into a function

module.exports = function(app) {
  //post a specific login, then provide json
  app.post("/api/:new", function(req, res){  //need to use the ID somewhere
    var users = req.body;
    //create a routeName
    var LoginInfoToDB = users.userName.replace(/\s+/g, "").toLowerCase(); //what do i do with this
    //then add user to the DB using sequelize
    db.users.create({
      routeName: LoginInfoToDB,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    });
// look at react tutorial 

//redirect to the main page through passport  (passport is under server file, look at api.js(wrong pass file), auth.js, authcheck.js)
//create tokens to to make sure client is authen. Auth check checks if the user is validated line 20, make it a redirect instead
//use react passport

  app.get("/api/:ID", function(req, res){  //how do i incorporate password?
    if(req.params.userName){
      userName:findOne({
        where:  {
          routeName:req.params.userName
        }
      }).then(function(result){
        //if/then statement (is it found, it will return the id when it's found)
        return res.json(result);
      });
    }
    else {
      console.log("wrong user or password"); //use a modal or prompt
    }
  });  
  });
};

router.get("/trivia", (req, res) => {
    axios
      .get("https://opentdb.com/api.php?amount=10", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });  
  
  module.exports = router;