const myMarks = [88, 75, 91, 82];

// const friendMarks = myMarks;
// const friendMarks = [myMarks[0], myMarks[1], myMarks[2], myMarks[3]];

// // spread operator
const friendMarks = [...myMarks];

myMarks.push(83);
friendMarks.push(74);

// console.log('myMarks:', myMarks, 'friendMarks:', friendMarks);


// // rest operator (must be use as last parameter during destructuring)
function addNumbers(num1, num2, ...numbers) {
    console.log(num1, num2, numbers);
    let sum = 0;
    numbers.forEach(number => sum += number);
    console.log(sum);
}

// addNumbers(1, 2, 3, 4, 5, 6);


// OBJECT
const obj1 = {
    name: 'Rafid',
    age: 25
}

const obj2 = {
    profession: 'Teacher',
    address: 'Dhaka'
}

const finalObject = { ...obj1, ...obj2 };  // spread operator in object
console.log(finalObject);