// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
/*
const firstName = person.firstName;
const lastName = person.lastName;
let age = person.age;
const eyeColor = person.eyeColor;
*/
const{firstName, lastName, eyeColor} = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = {a,b,c};


// Template strings
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
/*
function isValidAge(age=10) {
    return age
}
*/
const isValidAge = (age=10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
let sym = Symbol("This is my first symbol");

// Arrow functions
/*
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
*/
let whereAmI = (username, location) => {
      if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}