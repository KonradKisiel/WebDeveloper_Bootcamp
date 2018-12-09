//ASYNC AWAIT are ES8 features
//Build on top of promises

//Promise version (asynchronus code)
movePlayer(100, 'Left')
.then(()=>movePlayer(400, 'Left'))
.then(()=>movePlayer(10, 'Right'))
.then(()=>movePlayer(330, 'Left'))

//ASYNC, AWAIT version:
async function playerStart(){
	//AWAIT - pause function execution until get a response,
	//when the function is resolved then function moves to the next line
	const firstMove = await movePlayer(100, 'Left'); //pause
	await movePlayer(400, 'Left'); //pause
	await movePlayer(10, 'Right'); //pause
	await movePlayer(330, 'Left'); //pause
}

//****************** REAL WORLD EXAMPLE ********************/

//Promises:
fetch('https://jsonplaceholder.typicode.com/users') 
.then(resp => resp.json()) //get the data
.then(console.log) //and log it

//ES8 version:
async function fetchUsers(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users') //pause until, function get respnse from the fetch
	const data = await resp.json();
	console.log(data);
}

//****************** REAL WORLD EXAMPLE 2 ********************/

//PROMISES:
const urls = [
    'https://jsonplaceholder.typicod.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//fetch returns a promise (with pending)
Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch('oops');

//ES8, AWAIT:
const getData = async function(){
	try {
		const[users, posts, albums] = await Promise.all(urls.map(url =>
			fetch(url).then(resp => resp.json())
		))

		console.log('users', users)
		console.log('posts', posts)
		console.log('albums', albums)
	} catch (err) { //catch can receive an error
		console.log('oops', err)
	}
}


