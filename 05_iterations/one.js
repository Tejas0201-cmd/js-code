// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
}

// element cant be accessed outside of for loop as its scope is only in the for loop not after that


// ctrl + D  => to ye baar baar click krne se saare duplicates jitne hai sbko select kr deta hai aur backspace krne pe sb delete ho jate hai

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner Loop Value : ${j} and Inner Loop ${i}`);

      //  console.log(i + "*" + j + " = " + i * j);
       // Printing tables of numbers from 1 - 10
    }
}

const array = ["Virat Kohli" , "Dhoni" , "Rohit"]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}



// break and continue

for (let i = 1; i < 20; i++) {
    if(i == 5){
        console.log("Detected 5");
        break    // breaks the loop and gets out of it when i == 5
    }
    console.log(`Value of i is ${i}`);
    
}

// alt + shift + down  =>  arrow to copy whole block down

for (let i = 1; i < 20; i++) {
    if(i == 5){
        // console.log("Detected 5");
        continue    // to skip printing of 5 and skip that round 
    }
    console.log(`Value of i is ${i}`);
    
}

// break => cuts the loop after the given point in the condition and prints nothing after that

// continue => skips that particular round according to the given condition and print rest all what is written in the code 