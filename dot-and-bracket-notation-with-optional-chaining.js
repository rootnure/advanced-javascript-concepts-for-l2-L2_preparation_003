const person = {
    name: 'Hamid',
    age: 35,
    address: {
        presentAddress: {
            flat: 201,
            house: 55,
            road: 3,
            area: 'Uttara',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    }
}

// dot notation
const houseNo = person.address.presentAddress.house;
// console.log(houseNo);

// bracket notation
const age = person['age'];
const propertyName = 'address';
const address = person[propertyName];
// console.log(age, address);

// optional chaining
const permanentPostalCode = person?.address?.permanentAddress?.postalCode; // will give undefined if any middle property is missing instead of crashing the code
console.log(permanentPostalCode);