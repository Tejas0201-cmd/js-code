const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach(( item ) => {
  //  console.log(item);
})

// forEach  =>  Ye koi bhi value return nhi krta hai undefined deta hai

// console.log(values);


// filter  =>  ye bhi ek callback function hai pr ye value ko return krta hai function ke andar aur ye filter kr deta hai cheezo ko return krte waqt

// filter  =>  ye vahi value dega jo true hogi iske andr jo condition di hai uske according


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter( (num) => {
 
    return num > 4        // {} lagane pe return keyword use krna hi hai
})

// {} lagane pe return keyword use krna hi hai => kyuki humne ek scope open kiya hai {} lagake

// console.log(newNums);


// Using forEach loop to print this -

const oldNums = []

myNums.forEach( (num) => { 
    if(num > 4){
        oldNums.push(num);
    }
})

// console.log(oldNums);

const Books = [
    {title: 'Book One' , genre: 'Fiction' , publish: 1981 , edition: 2004},
    {title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
    {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2010},
    {title: 'Book Four' , genre: 'Non-Fiction' , publish: 1989 , edition: 2010},
    {title: 'Book Five' , genre: 'Science' , publish: 2009 , edition: 2014},
    {title: 'Book Six' , genre: 'Fiction' , publish: 1987 , edition: 2010},
    {title: 'Book Seven' , genre: 'History' , publish: 1986 , edition: 1996},
    {title: 'Book Eight' , genre: 'Science' , publish: 2011 , edition: 2016},
    {title: 'Book Nine' , genre: 'Non-Fiction' , publish: 1981 , edition: 1989},
]

let userBooks = Books.filter( (bk) => bk.genre === 'History')

userBooks = Books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'

})  // overwrite variable userBooks we can do this


// yaha upr array ke andr se object aa gaya hai jise hum bk bol rhe hai to uske sath . lagake hum kisi bhi property ko access kr skte hai

console.log(userBooks);


// Note -> while doing the operations on array prefer to use let to declare anything in order to access the things from array when in the array there are objects and string characters