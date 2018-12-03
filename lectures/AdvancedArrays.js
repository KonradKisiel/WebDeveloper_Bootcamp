const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num)=>{
	double.push(num * 2);
})

console.log(double);


// map, filter, reduce (thye are pure, no side fx)

//************* MAP ****************
//map, always return something, is better to use map than forEach
const mapArray = array.map((num)=>{
	//map requires return, otherwise we get undefined
	return num*2;
});
//const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//************* FILTER ****************
//filter array with a condition, returns new array
const filterArray = array.filter(num => {
	//return all element above five
	return num > 5;
});
//const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);


//************* REDUCE ****************
//reduce takes accumulator and the number
//accumulator store information that happens in the body of the function
const reduceCount = array.reduce((accumulator, num)=>{
	//acc store infomration about number from previous function calls
	return accumulator + num;
}, /*specify value for acc to start with*/ 
5);

console.log('reduce', reduceCount);