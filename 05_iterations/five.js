// forEach => ye smart loop hai jiske andr hume function callback krna hota hai 

// callback function => mtlb function jisme name na ho

const coding = ["js" , "ruby" , "python" , "java" , "cpp"]

// kyuki ye function array ke andar chal rha to ye apne aap isme value leke ayega jaise yaha val hai


// Method 1 => without arrow function

 coding.forEach(function(val){
   // console.log(val);
 })


// Method 2 => using arrow function

coding.forEach((val) => {
   // console.log(val);
})


// Method 3 => making a function before and then giving reference in forEach loop to execute it

function printMe(val){
    // console.log(val);
}

// coding.forEach(printMe)

// Remember => function ka refrence dena -> ( function ) print vo kr dega , function ko print nhi krana ye mt dena -> (function())

coding.forEach((item , index , arr) => {
   // console.log(item , index , arr);
})

// to ye upr wala hume saari cheeze print krke de dega 

// iske pass sbkuch ka access rehta hai item ka , index ka , array ka bhi


// Objects in array ->

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js",
    },
    {
    languageName: "java",
    languageFileName: "java",
    },
    {
    languageName: "python",
    languageFileName: "py",
    }
]

myCoding.forEach( (item) => {         // item ka access liya gya yaha
    console.log(item.languageName);   
})

// ****** Important for database

// yaha hume pure object ka access mila item ke through thik hai , fir humne item ke through object ke andr kisi property ko access krne ke liye sirf . lagake uska naam likha aur hume har object se uss property ki value mil gyi array ke andr se

// array ke andr => object ke andr => propert ki value nikal di hai

