var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var passport = require("./config/passport");
var flash = require("connect-flash");

var PORT = process.env.PORT || 3001;
var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "vidyapathaisalwaysrunning",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());


require("./routes/html-routes.js")(app);  //do we need this, think react takes care of this?
require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function(){
  app.listen(PORT);
  console.log("The magic happens on port " + PORT);
});




