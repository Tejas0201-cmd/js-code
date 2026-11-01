const legends = ["Virat Kohli", "Rohit Sharma", "MS Dhoni"]
const best = ["AB Devilliers", "Hardik Pandya", "Bumrah"]

legends.push(best) // pushes the whole arry best as a element in legends

// console.log(legends);
// console.log(legends[3][1]);

// const allLegends = legends.concat(best) // concat => returns new array
// console.log(allLegends);

// concat => combines two arrays all elements

const newArray = [ ...legends, ...best]

// ... => it spreads the elements sepreately

// console.log(newArray);

const array = [1 , 2, 3 ,[4,5,6],7,[6,7]]

const real_array = array.flat(Infinity)

// flat(infinity) => flat jo bhi array ke andr array hai use simple main array ke element me bna deta hai aur infinity depth ko denote krta hai ki kitni depth tk use krna haii shi

// console.log(real_array);


console.log(Array.isArray("Tejas"));

// isArray() => check krta hai ki array hai ki nhi

console.log(Array.from("Tejas"));

//  from() => array me convert kr deta haii

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// of() => ye bhi array me convert kr deta hai elements ko