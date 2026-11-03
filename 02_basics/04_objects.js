//const tinderUser = new Object()  // ye ek singleton object hai
const tinderUser = {}              // ye ek non singleton object hai

// Both declaration will give same output empty object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tejas",
            lastname: "Tripathi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// Ye object ke andr object ko access krne ka method hai . lagake access krte jao

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = {obj1 , obj2} // Method 1
// const obj4 = Object.assign({} , obj1 , obj2 , obj3) // Method 2

// to yha pe objects ko combine krne ke liye hum ek empty object sbse pehle lete hai taaki vo target rhe aur baaki jo objects diye hue hai vo source rhe mtlb saare source object target object me values denge apni 


const obj4 = {...obj1,...obj2,...obj3}  // Best method & most used using spread operation ...

// console.log(obj4);

const users = [                  // database se value kaise aati hai
    {
        id:1,
        email: "company@gmail.com",
    },
    {
        id:1,
        email: "company@gmail.com",
    },
    {
        id:1,
        email: "company@gmail.com",
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  
console.log(Object.values(tinderUser)); // ye values deta hai object ki
console.log(Object.entries(tinderUser)); // ye entries deta hai 1 property keyu hogi 2nd value hogi

console.log(tinderUser.hasOwnProperty('name'));

// hasOwnProperty() => checks if a property named in the bracket() is in the object or not , if it is it gives true else it gives false

// key() => it gives keys of the object

// values() => it gives values of the objects declared in key

// entries => it gives the output in this format {key , value} 