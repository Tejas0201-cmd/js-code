const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach(( item ) => {
  //  console.log(item);
})

// forEach  =>  Ye koi bhi value return nhi krta hai undefined deta hai

// console.log(values);


// filter  =>  ye bhi ek callback function hai pr ye value ko return krta hai function ke andar 


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter( (num) => {
 
    return num > 4        // {} lagane pe return keyword use krna hi hai
})

console.log(newNums);


// Using forEach loop to print this -

const oldNums = []

myNums.forEach( (num) => { 
    if(num > 4){
        oldNums.push(num);
    }
})

console.log(oldNums);