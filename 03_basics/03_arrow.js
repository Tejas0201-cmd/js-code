const user = {
    username: "Tejas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);

        // yha function ke andr this ka use krne pe vo context ko refer krta hai aur jitni bar bhi function call ayega vo utni baar uss data ko object se lekr print krega har ek variable ke sath 
    }
}

//user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);
// yha this krne se vo global scope me chala jata hai to isliye vo ek empty {} output me de deta hai


// this function => ye value ko fix nhi krta flexible kr deta hai mtlb user jb bhi chahe use access krke change kr de


// browser ke andr global object hai => window


// function chai(){
//   let username = "Tejas"
 //   console.log(this.username);
// }

// this function sirf object ke andr kaam kr rha function me nhi usme run krane pe vo undefined output me de rha

// chai()

// const chai = function(){
//   let username = "Tejas"
//   console.log(this.username);
// }

//chai()

// const chai = function() => {
//   let username = "Tejas"
//   console.log(this.username);
// }

// arrow function => iske andr bhi this undefined hi deta hai


//+++++++++++++++++ Arrow Function +++++++++++++++++++++++ // 


// () => {}                ..... Method 1

const add = (num1 , num2) => {          // .... Method 2
    return num1 + num2
}

console.log(add(3,5));


// Implicit return method -

// const addtwo = (num1 , num2) => num1 + num2

// const addtwo = (num1 , num2) => (num1 + num2)

const addtwo = (num1 , num2) => ({username: "Tejas"})

// object always in {}

console.log(addtwo(4,7));


// Implicit => mtlb hum assume kr rhe ki hume return krne ki zrurat nhi hai hum maan liye ki humara ek hi line ka statement hai


// () isme bhi hum apne us statement ko likh skte hai but if, {} ye lagaya to return statement likhna hi pdega