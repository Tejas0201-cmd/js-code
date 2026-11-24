const myNums = [1 , 2 , 3]

//const myTotal = myNums.reduce(function (acc , curentvalue) {
//    console.log(`acc : ${acc} and curvalue : ${curentvalue}`);
//    return acc + curentvalue
// }, 0)


const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)

console.log(myTotal);



const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "py course",
        price: 999
    },
    {
        item: "mobile dev course",
        price: 5999
    },
    {
        item: "data science course",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce( (accu , item) => accu + item.price,0)

console.log(`Total Price to pay : ${totalPrice}`);


// basically accumulator updates every time after adding each and every value and updating the added value into it



// reduce me last me bracket close hone se pehle ek comma lagake koi saa bhi number dena hi hai taaki accumulator initialize ho sake uss number se aur further work kre


// arrow function  -   (() => ())


// reudce method  =>  ye bhi ek callback function hi hai
// Syntax - const example = example.reduce( (accumulator , currentvalue) => {accumulator + currentvalue} , initialvalue);


// isme jo hai hume parameters me accumulator aur curentvalue array ki deni rhegii aur vhi milega bhi dene ke liye to yaha pe accumulator jo hai ek nayi isse pehle ek variable initialized hoga initialvalue ke naam se to vo value isme chli jayegi aur pehli baar me accumulator = 0 rhega 
// aur currentvalue to array ki hai hi