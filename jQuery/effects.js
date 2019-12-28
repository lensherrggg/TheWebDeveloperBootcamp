$("button").on("click", function(){
    $("div").slideToggle(1000, function(){
        console.log("Slide is done");
        
    });
});