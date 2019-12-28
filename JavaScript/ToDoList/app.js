var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list"){
        listToDos();
    }
    else if(input === "new"){
        newToDo();
    }
    else if(input === "delete"){
        deleteToDo();
    }
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app. ");

function listToDos(){
    console.log("**************");
    todos.forEach(function(todo, i){ //第一个参数指向todos的元素，第二个参数表示元素下标
        console.log(i + ": " + todo);
    });
    console.log("**************");
}

function newToDo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
}

function deleteToDo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted");
}