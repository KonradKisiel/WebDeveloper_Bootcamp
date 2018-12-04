const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

//1
for (let i=0; i<basket.length; i++){
	console.log(basket[i]);
}

//2(ES5)
basket.forEach(item =>{
	console.log(item);
})


//******************* FOR OF **********************
//ITERATING elements - arrays, strings
for (item of basket){
	console.log(item);
}
//apples
//oranges
//grapes

//string iteration
for (item of 'basket'){
	console.log(item);
}
//b
//a
//s
//k
//e
//t

//******************* FOR IN **********************
//FOR IN - works with objects
//ENUMERTING - objects, are enumerable
for(item in detailedBasket){
	console.log(item);
}
//apples
//oranges
//grapes

//ARRAYS are objects, for in enumerating over array values
for(item in basket){
	console.log(item);
}
//0
//1
//2