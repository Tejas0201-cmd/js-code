// for of

// for of => ye sidha values ko hi print kr deta hai

// ["" , "" , ""]           
// [{} , {} , {}]        =>  object in array


const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {      // for numbers in array
    // console.log(num);
}

// iske andr jo likha hai () usme of ke baad vo likhna hai jispe loop lagana hai 

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps            ->  Ye ek Object hai jo value store krta ha

// It holds key value pairs and remembers the original order of the insertion keys ,, any value can be used as either a key or value

// It contains no duplicate values , one value occur only once

// Isme values ko pairs me dete hai


const map = new Map()
map.set('IN' , 'INDIA')
map.set('USA' , 'United States of America')
map.set('FR' , 'France')
map.set('UK' , 'United Kingdom')
map.set('Japan' , 'Ja')

// map.set => ye ( .set ) values dalne ke liye use krte hai map me 

// aur agar pair dete waqt sirf ek string value doge to dusri undefined ayegi 

// console.log(map);

for (const key of map) {
//  console.log(key);   

// ye sidha ek pair ko dega linewise jitni bhi pair hai total print array ke andrr dega

}

for (const [key , values] of map) {
    console.log(key , '->' , values);

    // ye pairs ko sirf normally print krega array me nhi

}

const myObject = {
    'game1' : 'Cricket',
    'game2' : 'Football',
}


// Under the method to access the pair is only applicable for map not for objects

for (const [key , values] of myObject) {
    console.log(key , '->' , values);
}