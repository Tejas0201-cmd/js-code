let score = "33" // string value

//console.log(typeof score); // method 1 to know datatype
//console.log(typeof(score)); // method 2 to know datatype

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);

// let score = "33abc" => ye bhi datatype me number hi dega automatically abc convert ho jayega number me , lekin value ko print krane prr ye NaN dega (Not a number).

// undefined value dalne pr => NaN dega
// null dalne pr => 0 dega
// true => 1 
// false => 0 

// "33" => 33
// "33abc" => NaN

let isLoggedin = 1

let type = Boolean(isLoggedin)
//console.log(type);

// 1 => true
// 0 => false
// "" => false
// "Tejas" => true

let Somenumber = 33

let StringNumber = String(Somenumber)
//console.log(StringNumber);
//console.log(typeof StringNumber);

// ************************OPERATIONS*****************************//

let value = 3
let negvalue = -value
//console.log(negvalue)


// -> Basic Math operations

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2**3)
//console.log(2%3)

let str1 = "Hello"
let str2 = " Tejas"
let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2); // not a good code practice
//console.log(1 + "2"); 
//console.log("1" + 2 + 2); 
//console.log(1 + 2 + "3");


/*
To string me agar "1" ya koi bhi number pehle ata hai bracket me " " iske andr to ye consider pehle kiya jayega aur jo bhi aap aage likhenge simply output me iske aage vo likh diya jayega
*/


/*
Agar aap pehle number likhte hai to javascript pehle use hi consider kregi baad me agar string hai to usko baad me consider kregi
*/

//console.log(+true);
//console.log(+" ");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let GameCounter = 100
GameCounter++;
console.log(GameCounter);