const greetingsMsg = name => {
    const msg = `Hello ${name}, welcome to 2024.`;
    return msg;
}

// named export
export const greetDeveloper = name => `Hello developer ${name}. Welcome to ES6.`;

// named export in different way
const greetNewDeveloper = name => `Hello ${name}. Welcome to next level development`;
const greetOldDeveloper = name => `Hello developer ${name}. Welcome back to next level development`;

export {
    greetNewDeveloper,
    greetOldDeveloper
}

// default export
export default greetingsMsg;