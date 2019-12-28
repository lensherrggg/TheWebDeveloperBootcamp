var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// var Post = mongoose.model("Post", postSchema);

module.exports = mongoose.model("Post", postSchema);