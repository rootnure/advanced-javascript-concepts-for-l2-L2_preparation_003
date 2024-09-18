const numbers = [76, 72, 88, 81];

// const num1 = numbers[0];
// const num2 = numbers[1];
// const num3 = numbers[2];
// const num4 = numbers[3];

// Array Destructuring
const [num1, num2, num3, num4] = numbers;
// console.log(num1, num2, num3, num4);

const [firstNumber, secondNumber, ...restNumbers] = numbers;
// console.log(firstNumber, secondNumber, restNumbers);


const person = {
    name: 'Ashraful',
    age: 32,
    phone: '0126000000',
    address: 'Dhaka',
}

const person2 = {
    fullName: 'Ashraful',
    currentAge: 32,
    contactNumber: '0126000000',
    address: 'Dhaka',
}

// const name = person.name;
// const age = person.age;
// const phone = person.phone;
// const address = person.address;

const { name, address, age, phone } = person;
// console.log(name, age, phone, address);

const { fullName, currentAge, ...restInfo } = person2;
console.log(fullName, currentAge, restInfo);