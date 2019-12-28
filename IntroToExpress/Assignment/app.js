var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sound = {
        pig: "Oink", 
        cow: "Moo",
        dog: "Woof Woof!"
    };
    res.send("The " + animal + " says " + sound[animal]);
});

app.get("/repeat/:thing/:num", function(req, res){
    var thing = req.params.thing;
    var num = req.params.num;
    var str = "";
    
    str = str + thing;
    for(var i = 0; i < num - 1; i++){
        str = str + " " + thing;
    }
    
    res.send(str);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started");
});