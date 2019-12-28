var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://cdn.pixabay.com/photo/2016/11/15/23/43/motorhome-1827832_1280.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi inventore sint eaque labore. Esse id nostrum aliquam explicabo iure rem quibusdam amet officia placeat deleniti, sit, quas reiciendis alias eos obcaecati ut fugit quia et! Nobis ea reprehenderit nesciunt."
 
    },
    {
        name: "Desert Mesa", 
        image: "https://cdn.pixabay.com/photo/2017/07/17/16/21/nature-2512944_1280.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi inventore sint eaque labore. Esse id nostrum aliquam explicabo iure rem quibusdam amet officia placeat deleniti, sit, quas reiciendis alias eos obcaecati ut fugit quia et! Nobis ea reprehenderit nesciunt."
    },
    {
        name: "Canyon Floor", 
        image: "https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412_1280.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi inventore sint eaque labore. Esse id nostrum aliquam explicabo iure rem quibusdam amet officia placeat deleniti, sit, quas reiciendis alias eos obcaecati ut fugit quia et! Nobis ea reprehenderit nesciunt."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function (seed) {  
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was Internet",
                            author: "Homer" 
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment")
                            }  
                        }
                    );
                }
            });
        });
    });
}

module.exports = seedDB;


