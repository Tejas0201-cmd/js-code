// Dates

// Dates datatype => object

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// Month start from 0 in js

// let myCreatedDate = new Date(2026, 0, 29)
// let myCreatedDate = new Date(2026, 0, 29, 5, 3)
// let myCreatedDate = new Date("2026-02-10") // YY-DD-MM
let myCreatedDate = new Date("01-02-2026") // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()


// Date.now => gives the milliseconds passed from 1 jan 1970


// get.Time => looks the value and tell milliseconds passed from the given date to 1970

// Do comparison b/w always in milliseconds

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());

// Math.floor => to remove the decimal which come by /1000

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // to get month number
console.log(newDate.getDay()); // to get day number


// isme hum kisi bhi cheez ko jaise chahe vaise access kr skte hai apne hisab se object ke andr bnake

newDate.toLocaleString('default', {
    weekday: "long", // day ka pura naam chahiye
})


// new Date().getDay() ➔ Yeh method index value return karta hai (0 for Sunday, 1 for Monday...). Jaise tere terminal output mein 4 aaya hai, iska matlab aaj Thursday hai (aur terminal clock par date 29-10-2026 dikh rahi hai, absolute accurate!).


// toLocaleString('default', { weekday: 'long' }) ➔ Yeh master function hai jo date format ko dynamic customizable templates mein convert karta hai. weekday: "long" likhne par yeh poora naam (jaise "Thursday") filter karke dega!


// Months 0 se shuru hote hain
// Days 0 se shuru hote hain

// toString() ➔ Poori details standard text format mein dega

// toDateString() ➔ Sirf date, month aur year dega 

// toISOString() ➔ Jo tere terminal par dikh raha hai (2026-10-29T17:46...), yeh standard database entry format hai