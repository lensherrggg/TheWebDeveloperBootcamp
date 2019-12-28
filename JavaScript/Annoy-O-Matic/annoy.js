// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
//     answer = prompt("Are we there yet?");
// }
// alert("Yay, we made it. ");

var answer = prompt("Are we there?");
while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1){
    answer = prompt("Are we there?");
}
alert("Yay, we made it");