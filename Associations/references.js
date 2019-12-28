var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

// POST - title, content
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);
var Post = require("./models/post");

// USER - email, name
// var userSchema = new mongoose.Schema({
//     email: String, 
//     name: String,
//     posts: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Post"
//         }
//     ]
// });

// var User = new mongoose.model("User", userSchema);

var User = require("./models/user");

Post.create({
    title: "How to cook the best burger pt.3",
    content: "ffffffffff"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });
});

// Find user

// find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Chelcher"
// });

// Post.create({
//     title: "How to cook the best burger",
//     content: "blah blah blah"
// }, function(err, post){
//     console.log(post);
// });