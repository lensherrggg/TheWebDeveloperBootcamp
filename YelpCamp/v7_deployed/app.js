var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash")
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
// var Campground = require("./models/campground");
// var Comment = require("./models/comment")
var User = require("./models/user");
var seedDB = require("./seeds");

// requiring routes
var commentRoutes= require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

// mongoose.connect("mongodb://localhost:27017/yelp_camp_2", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb+srv://rui:ganrui980522@yelpcamp-eegcf.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB(); // seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// authenticate() comes from passportLocalMongoose in user.js
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/camp/:id/comments", commentRoutes);

// app.listen(process.env.PORT || 3000, function () {  
//     console.log("YelpCamp Server has started");
// });

app.listen(process.env.PORT, process.env.IP, function () {  
    console.log("YelpCamp Server has started");
});