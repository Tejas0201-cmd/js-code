const userEmail = "tejas.ai"

if(userEmail){
    console.log("Got");
}else{
    console.log("Not Got");
}

// to yha pe jo hai userEmail ko sirf hum if me likh rhe aur use true man liya gya hai kyuki userEmail me ek string stored hai aur use hi true man liya gya 

// aur agar userEmail = "" (empty string) hai to maan liya gya ki ye false hai automatically


// falsy values -

// false , 0 , - 0 , BigInt 0n , "" , null , undefined , NaN 


// truthy values -

// "0" , "false" , " " (space in string) , [] (Empty Array) , {} (Empty Object) , function(){}  => (Empty Function)


// Way to check if a array is empty 

const arrays = []

if(arrays.length === 0){
    console.log("Empty Array");
}


// Way to check if a object is empty

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Empty Object");
}

// to yaha direct acces krne ke liye => Object jo predefined hai js me use .keys() ke sath likhe to () ye lagane se ye pura ek array bn gya ab array ko .length se check kr skte hai ki vo empty hai ya nhi


// In inspect on chrome    ( Interview Questions ) -
// false == 0   => gives true
// false == ''    => gives true 
// 0 == ''      => gives true


// Nullish Coalescing Operator (??) : (works on null & undefined)       
        // - mainly used in database (made for null undefined)

let val1;
val1 = 5 ?? 10         // it gives 5
// val2 = null ?? 10      // gives 10
val2 = undefined ?? 15      // gives 15
 
console.log(val1);
console.log(val2);

// is operator me agar null ke baad koi value ayi hai to vo assign kr do 

// nhi to agar dono values hai to pehli wali kr do humesha chahe multiple values bhi di gyi ho fir bhi


// Ternary Operator -

// condition ? true : false

const Price = 200

Price >= 80 ? console.log("Correct") : console.log("Wrong")