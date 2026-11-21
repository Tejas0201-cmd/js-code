const myObject = {
    js: 'Javascipt',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


// forin loop

for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
    // above is used to print key with their values

//  console.log(myObject[key]); // used to access value of key

}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

// arrays ke case me forin loop indexes print kr deta hai key print krane pe , aur forof loop value print krta hai

for (const key in programming) {
    console.log(programming[key]);   // prints indexes of arr

}

// objects ke liye = > forin loop

// maps ke liye = > forof loop

// arrays ke liye = > forof loop