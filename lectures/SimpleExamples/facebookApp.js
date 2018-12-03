var database = [
	{
		username: "Andrei",
		password: "supersecret"
	},
		{
		username: "Sally",
		password: "123"
	},
		{
		username: "Ingrid",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "JavaScript is soo cool"
	},
	{
		username: "Mitch",
		timeline: "JavaScript is soo cool"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPromt = prompt("What's your password?");

function isUserValid(username, password){
	for(var i=0; i<database.length; i++){
		if(username === database[i].username && password === database[i].password){
			return true;
		}
	}
}

function signIn(username, password){
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}
	else{
			alert("Sorry, wrong username or password!");
		}
}

signIn(userNamePrompt, passwordPromt);