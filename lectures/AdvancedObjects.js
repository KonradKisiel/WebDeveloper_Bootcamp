//****************** REFERENCE TYPE *********************
//REFERENCE TYPE - non primitive type

var object1 = {value: 10};
var object2 = object1;      //object2 is a reference(adress) to object2
var object3 = {value: 10};  //object3 is a new object

object1 === object2;  //true (the same reference)
object1 === object3;  //false (different adress in memory)

object1.value = 15;
console.log(object2.value); //15
console.log(object3.value); //10

//arrays are also objects (reference types)
[]===[];      //false
[1]===[1];    //false


//****************** CONTEXT *********************
//CONTEXT - tells, where we are within the object 
console.log(this === window); //true

function a(){
	console.log(this===window); //this referes to a function, which is inside the window obj
}
a(); //true

//creating new value for this (new object)
const object4 = {
	a: function(){
		console.log(this);            //return obect4
		console.log(this===window);   //false, now we are within object4
		console.log(this===object4);  //true
	}
}
object4.a(); //false, true


//****************** INSTANTIATION *********************
//INSTANTIATION - making copy of an object, reuse the code
//ES6 way
class Player {
	constructor(name, type){
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am ${this.type}`);
	}
}

//every time we extend something we need to also call 'constructor' function of basic class
//to do it we use super
class Wizard extends Player{
	constructor(name, type){
		super(name, type);
		console.log('wizard', this);
	}
	play(){
		console.log(`WEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shawn', 'Dark Magic');
const wizard2 = new Wizard('Shelly', 'Healer');