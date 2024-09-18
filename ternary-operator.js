const myAddress = {
    house: 10,
    block: 'D',
    road: 'Lalmatia',
    area: 'Mohammadpur',
    city: 'Dhaka'
}

// let myPostalCode;
// if(myAddress.postal?.code){
//     myPostalCode = myAddress.postal.code;
// }
// else {
//     myPostalCode = 1200;
// }

// ternary operator
const myPostalCode = myAddress.postal?.code ? myAddress.postal.code : 1200;