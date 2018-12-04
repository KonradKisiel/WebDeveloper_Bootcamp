//string padding, usefull for string aligments
.padStart();
.padEnd();

'Turtle'.padStart(10); //add 10 spaces - word length before the string
//"    Turtle" 
'Turtle'.padEnd(10); //add 10 spaces - word length after the string
//"Turtle    "


//trailing commas in functions parameter list and calls
//ES8 supports comma at the and of parameters lists and calls
const fun = (a, b, c, d,) =>{
	console.log(a);
}
fun(1,2,3,4,);


//Object.values and Object.entries
Object.values;
Object.entries

//by using key we can treat object as an array
Object.keys;

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index)=>{
	console.log(key, obj[key]);
})
//username0 Santa
//username1 Rudolf
//username2 Mr.Grinch

Object.values(obj).forEach(value=>{
	console.log(value);
})
//Santa
//Rudolf
//Mr.Grinch

//return array for each property
Object.entries(obj).forEach(value=>{
	console.log(value);
})
//["username0", "Santa"]
//["username1", "Rudolf"]
//["username2", "Mr.Grinch"]

Object.entries(obj).map(value=>{
	return value[1] + value[0].replace('username', '');
})