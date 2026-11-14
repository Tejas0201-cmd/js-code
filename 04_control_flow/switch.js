// switch case statement

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
} 
        */

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Deafult case")
        break;
}

// switch me har case ke baad break lagan zruri hota hai nhi to ek baar agar koi case match ho gya to uske baad ka jitna bhi case hoga sb print ho jayega (((except default case)))

// case ke aage jo bhi variables hai jaise months ke name to har case ke aage different months ke name likhna hai aur jo bhi match krega key wale name se vo print ho jayega simple bss