const fs = require('fs');

const a = 10;

setImmediate(()=> console.log("SetImmediate"));

Promise.resolve().then(() => console.log("Promise resolved"));

fs.readFile("./file.txt" , "utf-8" , ()=>{
    console.log("File reading CB");
});

setTimeout( ()=>{
    console.log("Timer Expired");
},0);

process.nextTick( ()=> console.log("Process.nextTick"));

function printA(){
    console.log("Value of a is :", a);
}
printA();
console.log("Last line of code");



