// Iniitalize Packages used by blog App
   var expressSanitizer = require("express-sanitizer"),
       bodyParser       = require("body-parser"),
       mongoose         = require("mongoose"),
       express          = require("express"),
       routes           = require('./routes/index'),
       app              = express();


// Define location and or methods used by packges
   mongoose.connect("mongodb://localhost/playerdb");
   app.use(express.static("public"));
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(expressSanitizer())
   app.set("view engine", "ejs");
   app.use('/', routes);

   app.use(function(req, res, next){
     var err = new Error('Not Found');
     err.status = 400;
     next(err);
   })

   if(app.get('env') === 'development'){
     app.use(function(req, res, next) {
       res.status(err.status || 500);
       res.render('error')
     })
   }

   app.use(function(err, req, res, next){
     res.status(err.status || 500);
     res.render('error');
   });


module.exports = app;
