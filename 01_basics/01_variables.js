const accountId = 144553
let accountEmail = "tejas@gmail.com"
var accountPassword = "12345"
accountCity = "Akbarpur"  // aisa bhi ho skta hai bina let ke use ke bhi

let accountState; // ; lagao chahe na laagao no impact

//accountId = 2 // not allowed here

accountEmail = "tt@gmail.com"
accountPassword = "1373498"
accountCity = "Gautam Budhha"
console.log(accountId)

/*
Prefer not to use -> var
 -> because of issue in block scope(i.e.{}) and functional scope
 it is not preffered
 */

 /*
 mostly for constant -> const is used
 for variable -> let is used
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])