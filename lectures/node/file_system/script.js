//getting access to file system module
const fs = require('fs');

//readFile is asynchronous (have callback function)
fs.readFile('./hello.txt', (err, data)=>{
    if(err){
        //throw(err);
        console.log('errrorrr');
    }
    //toString use utf8 by default
    console.log('readFile (async): ',data.toString());
})

//read file synchronous
const file = fs.readFileSync('./hello.txt');
console.log('readFileSync (sync): ', file.toString());


//write some data to the file
/*fs.appendFile('./hello.txt', ' This is so cool!', err =>{
    if(err){
        console.log(err)
    }
});*/


//WRITE 
/*fs.writeFile('bay.txt', 'Sad to see you go', err =>{
    if(err){
        console.log(err);
    }
}) */

//DELETE
fs.unlink('./bye.txt', err=>{
   if(err){
    console.log(err);
   } 
   console.log('Incepion');
})