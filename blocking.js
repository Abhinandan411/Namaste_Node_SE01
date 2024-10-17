
const crypto = require("node:crypto");

console.log("hii there")

var a = 1020;
var b = 3434;

// Synchronous Function - will block the main thread - dont use it
console.log("========");
crypto.pbkdf2Sync("password" , "salt" , 5000000 , 50 , "sha256");
console.log("First key is generated ");

setTimeout(()=>{
    console.log(" Call me right now !!!");
},0)  // it will only be called once call stack of main thread is empty.

// Async function
crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key)=>{
    console.log("Second key is generated ");
});

function multplyFun(x , y){
    const res = x*y;
    return res;
}
const c = multplyFun(a , b);
console.log("Multiplication is : ", c);

