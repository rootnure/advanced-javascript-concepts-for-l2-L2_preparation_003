const greetingsMsg = name => {
    const msg = `Hello ${name}, welcome to 2024.`;
    return msg;
}

// named export
export const greetDeveloper = name => `Hello developer ${name}. Welcome to ES6.`;

// default export
export default greetingsMsg;