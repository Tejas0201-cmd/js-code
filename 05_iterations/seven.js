const myNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const New = myNumbers.map( (num) =>  num + 10)

let New = myNumbers
               .map( (num) => num * 10 )
               .map( (num) => num + 1 )
               .filter( (num) => num >= 40)

console.log(New);

// yaha teen cheeze lagi hai aur step by step kaam ho rha pehle 
// 1) - map laga to usne array ke har element me 10 se multiply kr diya fir aage ye naya array joki 10 se multiply hua hai uske baad jo usme elements bne hai vo jayenge , fir ,

//  2) - ye wala map ab jo naya array 10 se multiply hone ke baad aya hai usme ye saare elements me +1 krega aur usse aage pass krega , fir,

// 3) - fir filter use jo condition isme di gyi hai usse check krega aur jo elements usse match krenge use output me dega joki aye hai iske pehle wale map se +1 hone ke baad aur final output yhi ayega

// Note -> atlast saare tarike step by step apply honge uske baad apply hone ke baad har step pe jo result ayega vo agle step me jayega aur ye process continuously chlega





// chaining method  =>>  do teen methods ko jb hum ek sath kisi bhi array ya object ya kisi pe bhi lagate hai to us method ko hum chaining method .
// Example -> map lagaya fir map lagaya fir filter laga diya

// map   =>   it is also a callabck function but the easy one

// map   =>   it adds the value in the array according to the condition which you give in its function's scope and what you return to it

// {}  => if this is there use return keyword because it opened up a scope

// if {} not there  => dont use return keyword just simply write the condition