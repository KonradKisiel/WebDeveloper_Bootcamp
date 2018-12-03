var todos = [
	"clean room",
	"exercise",
	"eat healthy",
	"study javascript"
];

for(var i=0; i<todos.length; i++){
	todos[i] = todos[i]+"!";
}

//without var array will not be cleared
var todosLength = todos.length;
for(var i=0; i<todos.length; i++){
	todos.pop();
}

todos.forEach(function(todo){
	console.log(todo);
})

//print out also index of item
todos.forEach(function(todo, i){
	console.log(todo, i);
})

function logTodos(todo, i){
	console.log(todo, i);
}

todos.forEach(logTodos);

var counterOne = 0;
while (conterOne > 10){
	console.log(counterOne)
	counterOne++;
}

//do while always execute first iteration
var counterTwo = 10;
do{
	console.log("do while", counterOne)
	counterOne--;
}while(counterTwo>10);