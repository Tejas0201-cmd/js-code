// Data types on basis of how data is kept in memory and how it is accessed (kis trh se rkhte hai aur access krte hai)


// Primitive - ye call by value hai, ye data ki copy deta h

// 7 types : String , Number , Boolean , Null , Undefined , Symbol ( symbol is used to make a value unique) , BigInt



// Javascript dynamically typed language hai => JavaScript mein variables ka type code likhte waqt fix nahi hota ye sidhe run krte time type ko check krta hai aaur run kra deta hai.

// => Isme code likhte waqt datatype btana nhi pdta hai

const value = 100
const valuee = 100.3
const loggedIn = false
const temperature = null
let userEmail; // ( undefined ayega )

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3983940000n //last me n lgane p bigInt datatype bn gya


// Reference (Non Primitive) types - 

// Arrays , Objects , Functions


//Arrays -

const heroes = ["shaktiman", "nagraj", "doga"];


// Objects => Curly braces ke andr hote hai (koi bhi datatype ya object)

let myObj = {                // kisi ke equal kiye bina bhi likh skte h
    name: "Tejas",
    age: 18,
}


// Functions - 


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof value); // function ka datatype btata h(typeof)
console.log(typeof valuee);
console.log(typeof loggedIn); 
console.log(typeof temperature); 
console.log(typeof userEmail);
console.log(typeof id);  
console.log(typeof anotherId); 
console.log(typeof heroes); 
console.log(typeof myObj); 
console.log(typeof myFunction); 

// null datatype => "object"
// function datatype => object function