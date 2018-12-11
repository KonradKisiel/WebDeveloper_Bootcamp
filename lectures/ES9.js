//*********************************** ES9 (2018) **************************************//
//**************** Object spread operator (...rest) ********************//
//Similar to ES6 array spread operator (...array), but support objects insteead arrays
//array spread operator (...array) example:
const array = [1,2,3,4,5];
function sum(a,b,c,d,e){
	return a + b + c + d + e;
}
sum(...array); //output: 15

//Object spread operator (...rest) example:
const animals = {
	tiger: 23,
	lion: 5,
	monkey:2,
	bird: 40
}

//get all element from animals
const {tiger, lion, ...rest} = animals;
tiger //output: 23
lion //output: 5
rest //output: {monkey: 2, bird: 40}

function objectSpread(p1, p2, p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

objectSpread(tiger, lion, rest); //output 23 5 {monkey: 2, bird: 40}

//*********************** FINALLY *************************//
//FINALLY - alowes us to do smg, finally after promise has finished
//usually used at the end of try/catch block, always execute
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url=>{
	return fetch(url).then(people => people.json())
}))
.then(array => {
	console.log('1', array[0])
	console.log('2', array[1])
	console.log('3', array[2])
	console.log('4', array[3])
})
.catch(err => console.log('ughhhh fix it!', err))
.finally(() => console.log('extra'));
//finally does not receive a parameter

//*********************** ASYNC *************************//
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
//ES8 way of fetching data
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}
//for of
const loopThroughUrls = url => {
	for (url of urls){
		console.log(url)
	}
}
//thanks to for of we can get each item from an array of promises
//ES9 way of fetching data
const getData2 = async function(){
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises){
		const data = await request.json();
		console.log(data);
	}
}