//JS is a single threaded language that can be non-blocking
//JS can by asynhronus with callback functions, which are running in the background

//**** PROGRAM ****
//-allocate memory
//-parse and execute (read and run commands)


//*** JS ENGINE ****
//changes js to machine code
//have: MEMORY HEAP and CALL STACK

//MEMORY HEAP stores variables (const a = 1;)

//MEMORY LEAKS happen when you have unused memory (that fills up memory heap)
//so a good practise is to avoid GLOBAL VARIABLES

//CALL STACK is the place where the code is write and executed,
//tells where we are in the program, 
//functions go to CALL STACK
console.log('1');
console.log('2');
console.log('3');
//1, 2, 3

const one = () =>{
	const two = () =>{
		console.log('4');
	}
	two();
}
//execution order in stack
console.log('4');
two();
one();
//recusive STACK OVERFLOW
function foo(){
	foo()
}

//***** ASYNCHRONUS JS ******
console.log('1');
setTimeout(()=>{
	console.log('2');
}, 2000)
console.log('3');
//1,3,2
//setTimeout is part of WEB API

console.log('1');
setTimeout(()=>{
	console.log('2');
}, 0)
console.log('3');
//1,3,2
//2 still goes to Web API so is put to Callback Queue as last

//---------------------

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP