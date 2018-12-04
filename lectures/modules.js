//*************** ES6 + Webpack2 ****************
//js1
export const add = (a, b) => a + b;
//or
export default function add(){
	return a+b;
}

//js2
import {add} from './add';
//or
import add from '.add'; 

//WEBPACK - modules boundler, traverses dependency tree (export, import)
// usually into a single file (bundle)
//example of webpack config file:
module.eports = {
	entry: './app/main.js',
	output:{
		path: './dist',
		filename: 'bundle.js'
	}
}