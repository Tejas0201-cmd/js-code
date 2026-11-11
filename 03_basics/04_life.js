// Immediately Invoked Function Expressions (IIFE)


// Interview answer =>  Global scope ke pollution problem hoti hai kayi bar to us global scope ke jo variables hai uske pollution ko humne hatane ke liye IIFE ka use kiyaa 


(function chai(){           // Named IIFE
    console.log(`DB CONNECTED`);
})();

// yha ; isliye lagaya gya hai kyuki tbhi context iss function ka rukega aur iske baad koi aur function rha to uska execute hoga (end krne ke liye)

((name) => {               // Unnamed IIFE => arrow function
    console.log(`DB CONNECTED TWO ${name}`);
})("Tejas")

// parameter passed Tejas as name

// How to pass 2 IIFE?
// Ans ->          ; lagake


// IIFE => ye help krta hai agar ek variable agar same name ka 2 function me declared hai to vo completely alag hai dono ise use krne pe .

// bahar uss variable ko access krne pe vo undefined dega output me kyuki ab hum usse global scope me access kr rhe aur vo variable function me declared hai to it has no value in global scope to undefined dega