var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Morris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function (err, cat) {  
//     if(err){
//         console.log("SOMETHING WENT WRONG");
//     }
//     else{
//         console.log("WE JUST SAVED A CAT TO DB");
//         console.log(cat);
//     }
// });

Cat.create({
     name: "Snow White", 
     age: 15, 
     temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    }
    else{
        console.log("ALL THE CATS......");
        console.log(cats);
    }
});