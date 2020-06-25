const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/yelpcamp-map", {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.User = require('./user');
module.exports.Campground = require('./campground');
module.exports.Comment = require('./comment');