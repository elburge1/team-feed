// Iniitalize Packages used by blog App
   var expressSanitizer = require("express-sanitizer"),
       bodyParser       = require("body-parser"),
       mongoose         = require("mongoose"),
       express          = require("express"),
       app              = express();

// Define location and or methods used by packges
   mongoose.connect("mongodb://localhost/playerdb");
   app.use(express.static("public"));
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(expressSanitizer())
   app.set("view engine", "ejs");

   

module.exports = app;
