// let + const
//let cares about scope level
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90){
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//properties of const object can be changed (but object itself not)
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//line below equals 3 lines above
const {player, experience} = obj;
let {wizardLevel} = obj;

//new way of declaring object properties ES6 (dynamic property values)
const name = 'John Snow';
const obj_ES6 = {
	[name]: 'hello',
	['ray'+' smith']: 'hihi'
}


//if property and the value is the same, we can just write property name
const a = "Simon";
const b = true;
const c = {};

const obj_ES6_2 = {
	a, b, c
}


//ES5 way
const greeting_ES5 = "Hello "+name+" you seem to be doing "+greeting+" ";


//backticks `` are ES6 feture
//` ` template strings
const name = "Sally";
const age = 34;
const pet = "horse";
const greeting_ES6 = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

//default arguments
function greet(name='', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
}

greet();
greet("John", 50, "monkey");

//SYMBOL
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
//symbols creates completly unique type, so sym2 === sym3 returns false

//ARROW FUNCTIONS
//old way
function add(a, b){
	return a + b;
}

//new arrow way
const add2 = (a, b) => a+b;
