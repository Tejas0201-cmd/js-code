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


function one(){
    const username = "Tejas"
    function two(){              
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

   // two()
}

one()

// function two me jo variable hai unhe hum sirf usike andr access kr skte hai

// function one me jo variable hai use hum function two me access kr skte hai

// nested function => jo child function hai vo parent ke variable ko access kr pate hai

if(true){
    const username = "Tejas"
    if(username === "Tejas"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// website jis if block me declared hai usime hum use access kr skte hai agar vo nested hai to uske bahar nhi kr skte hai

// same tarike se username ko bhi hum access nhi kr skte pure if block ke bahar agar vo uss block me declared hai to



// ++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}

addone(5)

const addtwo = function(num){    // ise hum expression bhi kehte kbhi  
    return num + 2
}

addtwo(5)


// kisi bhi variable ko initialize krne ke pehle access nhi kr skte hai