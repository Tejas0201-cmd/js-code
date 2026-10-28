const score = 400
//console.log(score);

const balance = new Number(488) 

// Number => Using this it will give only number

//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));


// toString => used to convert it in string
// length => to check length of number
// toFixed => used for putting decimal places after number


const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(2));

// toPrecision => ye jo bhi no() isme diya jayega uske acc ye number ko round off kr dega utni digit use krke

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

// toLocaleString => this converts the no in indian standard form using ('en-IN') by putting commas into it

// Number.MAX => for getting max value in js
// Number.MIN => for getting min value in js


//++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++//

//console.log(Math);
//console.log(Math.abs(-4));  // abs => absolute val (- => +)
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2));   // ciel => upper val
//console.log(Math.floor(4.4));  // floor => lower val
//console.log(Math.min(3 , 6 ,7 ,9));
//console.log(Math.max(4,6,9,6));

console.log(Math.random()); // val => [0,1]
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);