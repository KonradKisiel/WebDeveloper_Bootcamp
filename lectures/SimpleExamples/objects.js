//objects are collections of properties
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abrakdabra", "shazam", "boo"],
	//function inside an object is a method
	shout: function(){
		console.log("AAAAAAAHHHH!");
	}
};

//getting object properties
user.name;
user.age;
user.hobby;
user.isMarried;

user.spells[1];

//adding property to an object
user.favouriteFood = "spinach";
user.spells = ["abrakdabra", "shazam", "boo"];
user.shout = function(){console.log("AAAAAAAHHHH!");}
//update property
user.isMarried = true;

var objArray = [
	{
		username: "Andy",
		password: "secret"
	},
	{
		username: "Jess",
		password: "123"
	}
];

objArray[0].password;

//empty object
emptyObj = {};
//empty array
emptyArray = [];
//null object, you cannot set a property to an null object
var nullObj = null;
