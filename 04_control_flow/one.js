// if

// const userLoggedIn = true

//if(condition){
// in if if condition is true so the code inside it is executed and if false it don't executes it
//}


if( 2 !== "2"){      
    // console.log("Executed");
}

// here 2 == "2" simply condition true because here equality is being checked not the data type

// ===   -> so this is used for strict checking mainly used for datatype checking (in js used for equality too)
 
// !==  -> this is used to check unequality of datatypes

// < , > , <= , >= , == , != , === , !==

const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`User power : ${power}`);
}

// power variable can only be accessed inside the if block as its declared in the if block so its scope is only inside the if block and that cannot be accessed outside of that block

// Warning!!! => dont use var as it have global scope so also it can be accessed out of any block 


const balance = 1000

// if( balance > 500 )  console.log("test");

// so above it is a implicit scope as it executes only in one line strictly

/*
 if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}
     */

// else if => for checking multiple conditions

const userLoggedIn = true
const DebitCard = true
const loggedInfromGogle = false
const loggedInfromEmail = true

if(userLoggedIn && DebitCard){
    console.log("Allow to buy course");
}

// && => used to check multiple conditions should be true then only the block is executed
// we can use && for two times in this block

if(loggedInfromGogle || loggedInfromEmail){
    console.log("User looged In");
}

// || => used to test multiple conditions and if any of one condition is true the block is executed

