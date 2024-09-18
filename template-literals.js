const greetingsMsg = name => {
    const msg = "Hello " + name + ", welcome to the code";
    // // template literals ``
    const msg2 = `Hello ${name}, welcome to the code`;
    console.log({ msg, msg2 });
}

greetingsMsg('Rafiuzzaman');