// Arrays

// js me Array me different datatypes bhi hote hai

// Shallow copy => It is the copy whose properties share same refrence point (original values) - (Heap)

// Deep copy => It do not share same reference point (stack) ,creates a duplicate copy



// Ways to represent an Array-

const Arr = [0,1,2,3,4,5]
const legend = ["Virat Kohli","Rohit Sharma","MSD"]

const Arr1 = new Array(1,2,3,4,5)
// console.log(Arr[1]);


// Array Methods

// Arr.push(6)        
// push => adds a element to array

// Arr.push(7)

// Arr.pop()           
// pop => it removes last element

// Arr.unshift(9)
// unshift => adds a element at first index

// Arr.shift()
// shift => removes the first element from array        

// console.log(Arr.includes(9));
// includes() =>check if a element is present

// console.log(Arr.indexOf(3));
// indexof() => checks index of a element in a array (if not present gives => -1)

// const newArr = Arr.join()
// join() => it joins the array & converts in string type

// console.log(Arr);
// console.log(newArr);


// Slice , Splice

console.log("A",Arr);

const newArr1 = Arr.slice(1 , 3)

// slice => it does not modify the original array and if slice.(1,3) is wirtten then it means it will display elements of only index 1 and 2 , and it will not display last index element 

console.log(newArr1); // Output => [1,2]
console.log("B",Arr);

const newArr2 = Arr.splice(1 , 3)

// splice => it adds, removes or replaces the elements from the original array and modifies it and gives the elements output which are in the given range

console.log("C" , Arr);
console.log(newArr2); // Output => [0 ,4 ,5]