//******************** CLOSURE **********************

//CLOSURES - a function ran. The function executed.
//It's never going to execute again. 
//But it's going remember thet there are references 
//to thouse variables, 
//so the child scope always has acess to the parent scope

//childeren hava always acess to parent's scope
//but parent to children don't

//old way of writing JS
function first(){
	var greet = 'Hi';
	function second(){
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

//new 2018 way
const first = () => {
	const greet = 'Hi';
	const second = () => alert(greet);
	return second;
}

const newFunc = first();
newFunc();


//******************** CURRYING **********************

//CURRYING - process of converting a function that takes 
//multiple argumnts into a function that takes them one at a time.

const multiply = (a, b) => a * b;
const curriedMultily = (a) => (b) => a * b;
curriedMultily(3); //output: (b) => a * b;
curriedMultily(3)(4); //output: 12;

//practical use
const multiplyBy5 = curriedMultily(5);
multiplyBy5(4); //output: 20;


//******************** COMPOSE **********************

//COMPOSE - act of putting two functions together
//to form a third function, where the output of one function
//is the input of the other

//f, g are functions; 
const compose = (f, g) => (a) => f(g(a));

const add1 = (num) => num + 1;
compose(add1, add1)(5); //output: 7         (5+1+1)



//******************** AVOIDING SIDE EFFECTS **********************
//******************** FUNCTIONAL PURITY **********************

//SIDE EFFECT - change in a function scope affect code outside the function
//a good practise is to avoid side effects

//side fx example (affecting code outside function)
var a = 1;
function b(){
	a = 2;
}

//FUNCTIONAL PURITY - function always return something and is 
//DETERMINICTIC: 
//anything is put into the function, always returns the same thing
