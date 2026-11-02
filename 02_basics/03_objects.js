// singleton
// Object.create => it creates a object and this is the constructor which makes singleton

// litreals ki trah declare krne pe singleton nhi bnta hai

// constructor se humesha singleton bnega

// Object literals

const mySym = Symbol("key1");

const Jsuser = {
    name:"Tejas",
    "full name":"Tejas Tripathi",
    [mySym]:"mykey1",
    age: 18,
    location:"Akbarpur",
    email:"tejas@google.com",
    isLoggedIn:false,
    lastloginDays:["Monday", "Sunday"],
}

console.log(Jsuser.email); // Method 1 to access 
console.log(Jsuser["email"]); // Method 2 to access
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

// square bracket ke andr " " lagake value jan payenge kyuki object use string treat krta hai

// Method 1 se hum agar " " isme koi value declare ki gyi hai object me to hum use iss method se access nhi kr skte only method 2 to be used here

// symbol => isse hum [] me object ke andr declare krenge nhi to ye datatype bdal jayega string me bina [] iske aur access bhi aise hi

Jsuser.email = "tejas@gemini.com" 
// Object.freeze(Jsuser);
Jsuser.email = "tejas@microsoft.com"
console.log(Jsuser);

// value change => just rewrite the value object.value = " " like this

// freeze => it locks the object and no change in the object can be done further in any value

Jsuser.greeting = function(){     // method to convert obj into function
    console.log("Hello JS");
}
Jsuser.greetingtwo = function(){  // method to convert obj into function
    console.log(`Hello JS user , ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

// this.value => it is used when we need to refrence same object