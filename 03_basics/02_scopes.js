if(true){                     // ye ek block scope hai
    let a = 10
    const b = 20              
    console.log("INNER : ",a);
}

// iske andr dclare ya initialize ki gyi value ko hum bahar nhi access kr skte hai uss block ke jaise yha if ke bahar nhi yhi uska scope hai


// iske bahar ye global scope hai


// {}  => ye jb kisi funcn ke sath ya if else ke sath ataa hai to ise hum scope kehte hai uss program ka


// console.log(a);
// console.log(b);
// console.log(c);


// var => not preffered to use kahi bhi nhi


// Global scope alag environment me alag hota hai 
// Ex- chrome pe inspect krne pe vaha global scope alag hai aur yaha node pe js me code environment me global scope alag hai