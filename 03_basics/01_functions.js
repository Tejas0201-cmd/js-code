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

// console.log(loginUserMessage());

// agar function call krte waqt hum koi bhi argument na de to undefined dega output me

// if hum chahte hai ki agar user koi argument pass hi na kre aur hum is condition ko avoid krna chahte hai to function me parameter ko ek by default value de skte hai kuch bhi 


// yha pe ... => rest operator hai ye aur yhi spread operator bhi hai usecase pe depend krta hai ki kaha hum isi spread kaha ise hum rest kahenge. Ye ek parameter function me pass krne me bhi jb bhi hum function call krenge to multiple arguments de skte hai usme


function calculateCartPrice(val1, val2 ,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

// to yha 200 -> val1 hai , 400 -> val2 hai aur num1 me spread operator hai to 500 , 2000 array me chle gye


const user = {
    username: "Tejas",
    price: 199
}
 
// Method to call object in a function
function handleObject(anyObject){ 
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// console.log(handleObject(user));


//Method 2 to access object in a function

handleObject({
    username: "Sam",
    price: 399
})

const NewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(NewArray));

// to mtlb hum function me koi bhi parameter de skte hai pr jo denge usiko hume function ke andr return krna hoga prr function ke bahar call krte waqt hum original array , object jo bhi hai uska original name call krenge ya agr array hai to directly bhi likh denge pure array ko


console.log(returnSecondValue([100, 200, 300, 400]))