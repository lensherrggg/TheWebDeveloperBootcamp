var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

mongoose.set('useCreateIndex', true);

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Take methods of passport-local-mongoose package to UserSchema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);