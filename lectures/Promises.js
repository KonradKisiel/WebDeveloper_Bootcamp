//PROMISE - is an object that may produce a single value,
//sometime in the future, either is resolved or rejected it
//fullfiled
//rejected
//pending


//CALLBACK pyramid of doom:
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left', function(){
        movePlayer(10, 'Right', function(){
            movePlayer(330, 'Left', function(){
            });
        });
    });
});


//modern solution:
movePlayer(100, 'Left')
.then(()=>movePlayer(400, 'Left'))
.then(()=>movePlayer(10, 'Left'))
.then(()=>movePlayer(330, 'Left'))

//FETCH - A modern replacement for XMLHttpRequest.
fetch('/my/utl').then(response =>{
	console.log(response.json());
});

//PROMISE:
const promise = new Promise((resolve, reject)=>{
    if (true){
        resolve('Stuff Worked');
    }else{
        reject('Error, it broke');
    }
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

//Promise.all() takes an array of promises 
Promise.all([promise, promise2, promise3, promise4])
//return values in array in the order that they were just written down
    .then(values =>{
        console.log(values);
    })

//chanining promises:
promise
.then(result => {
    throw Error
    result + '!'
})
.then(result2 =>{
    console.log(result2);
})
//catch any error that may happen between the chains before it
//wait until all promises were resolved before loggedd out
.catch(() => console.log('error!'))
.then(result3 => {
    throw Error;
    console.log(result3 + '!');
})

//****************** REAL WORLD EXAMPLE ********************/
const urls = [
    'https://jsonplaceholder.typicode.com/users',
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
}).catch(()=>console.log('error'))