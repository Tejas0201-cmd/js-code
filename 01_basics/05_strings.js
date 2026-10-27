const name = "Tejas"
const count = 50
// console.log(name + count + " Value"); // outdated syntax
 

// Modern way

// `` => ise string interpolation kehte hai


console.log(`Hello My name is ${name} and repocount is ${count}`);

const gameName = new String("TejasTripathi") 

// string represntation a dusra method uprrr

// console.log(gameName[0]); // 0 pe 1st letter hai => T 


// index 0 se shuru hota hai



// console.log(gameName.length); 
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));


// substring (start index,end index)

const NewString = gameName.substring(0,5) // no -ve value givn
console.log(NewString);

// slice me hi sirf negative value de skte hai 

const anotherString = gameName.slice(-7,-1)
console.log(anotherString);

const newstring1 = "  hitesh  " // start & end space
console.log(newstring1);
console.log(newstring1.trim());

// trim => remove extra spaces

const url = "https.//tejas.com//tejas%20tripathi"

console.log(url.replace('%20','-'));

// replace => used to replace particular thing from word

console.log(url.includes('tejas'));

// includes => ye check krta hai koi word hai ya nhi line me

 console.log(url.split('-')); 