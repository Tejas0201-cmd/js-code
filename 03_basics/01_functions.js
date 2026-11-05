function MyName(){
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("S");
}

// MyName()           // always use () when yu call a function


// In js we dont need to write datatype of the given parameters ( parameters => the values given in the function in ()  )


// while calling addTwoNumbers(3, 4) or any function the values which we pass in () are known as arguments

//Method 1 ->

function addTwoNumbers(number1 , number2){  
    console.log(number1 + number2);
}

addTwoNumbers(3 , 9)


// Method 2 ->

function addTwoNumbers(number1 , number2){
   // let result = number1 + number2
   // return result
   return number1 + number2
}

const result = addTwoNumbers(3 , 5)
// console.log("Result : ",result);

// Method 2 me function ke andr return line ke baad kuch bhi console.log() krenge nhi print hoga jo bhi krna hai return line ke pehle kro


function loginUserMessage(username = "Sam"){
    if(username === undefined){  // or if(!username)
        console.log("Please enter a value");
        return
    }
    return (`${username} just logged in`)
}

console.log(loginUserMessage());

// agar function call krte waqt hum koi bhi argument na de to undefined dega output me

// if hum chahte hai ki agar user koi argument pass hi na kre aur hum is condition ko avoid krna chahte hai to function me parameter ko ek by default value de skte hai kuch bhi 
