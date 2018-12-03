var stringsArray = ["tiger", "cat", "bear", "bird"];

var functionsArray = [function apple(){console.log("apple")}, 
function bannana(){console.log("bannana")}];


var mixedArray = ["apples", 3, undefined, true, function bee(){alert("buzz")}];

var arrayOfArrays = [stringsArray[0], functionsArray, mixedArray];

var Array2D = [["tiger", "cat", "bear", "bird"],[1,2,3,4,5]];

console.log(Array2D[0][1]);

stringsArray.shift(); //shift left
stringsArray.pop();   //remove last element of the array
stringsArray.push("elephant"); //add element to the array
stringsArray.concat(["bee", "deer"]); //create a new array based on existing one and add multiple elements to it

//sort only original values, DO NOT SORT CONCATINATED VALUES (cause we do not assign concated array to var)
//create a new array
stringsArray.sort();

//PROPER WAY OF DEALING WITH CONCAT
var someArray = ["car", "bus", "motorcicle", "train"];
var newArray = someArray.concat(["airplane"]);

//https://www.w3schools.com/jsref/jsref_obj_array.asp