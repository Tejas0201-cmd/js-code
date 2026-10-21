let score = "33" // string value

console.log(typeof score) // method 1 to know datatype
console.log(typeof(score)) // method 2 to know datatype

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// let score = "33abc" => ye bhi datatype me number hi dega automatically abc convert ho jayega number me , lekin value ko print krane prr ye NaN dega (Not a number).

// undefined value dalne pr => NaN dega
// null dalne pr => 0 dega
// true => 1 
// false => 0 

// "33" => 33
// "33abc" => NaN

let isLoggedin = 1

let type = Boolean(isLoggedin)
console.log(type)

// 1 => true
// 0 => false
// "" => false
// "Tejas" => true

let Somenumber = 33

let StringNumber = String(Somenumber)
console.log(StringNumber)
console.log(typeof StringNumber)