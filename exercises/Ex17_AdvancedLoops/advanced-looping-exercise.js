const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

//solution
function biggestNumberInArray(arr) {
  let biggest=0;//Number.MIN_VALUE;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>biggest){
      biggest = arr[i];
    }
  }
  return biggest;
}

function biggestNumberInArray2(arr) {
  let biggest=0;
  arr.forEach(value=>{
    if(value>biggest){
      biggest = value;
    }
  })
  return biggest;
}

function biggestNumberInArray3(arr) {
  let biggest=0;
  for(item of arr){
    if(item>biggest){
      biggest = item;
    }
  }
  return biggest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

function checkBasket(basket, lookingFor) {
  let itemBool=false;
  for(item in basket){
    if(item===lookingFor){
      console.log(`Yup, ${lookingFor} are in the basket`);
      itemBool=true;
      break;
    }
  }
  if(!itemBool){
    console.log(`No, there are no ${lookingFor} in the basket`);
  }
}

function checkBasket(basket, lookingFor) {
  for(item in basket){
    if(item===lookingFor){
      return `Yup, ${lookingFor} are in the basket`;
    }
  }
    return `No, there are no ${lookingFor} in the basket`;
}
