var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var userSchema = new mongoose.Schema({
    email: String, 
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

// var User = new mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);