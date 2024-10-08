# advanced-javascript-concepts-for-l2-L2_preparation_003
## ES6

- Spread and Rest operator
    - can only be used for Array and Object
    - rest operator must be the last parameter during destructuring
- Import, Export, Template literals
    - Template Literals --> Used to write string in more readable format using ***back tick (``)***
    ```js
    const msg = `Hello developer. Welcome to ${2024}`; // template literals
    ```
    - Export --> Used to export function or value that help to use that function or value externally (out of the same file)
        - Default Export
    ```js
    export default myFunction;
    ```
    - 
        - Named Export
    ```js
    export myFunction2 = name => `Hello ${name}. Welcome to development.`;
    ```
    - Import --> Used to import external package, function or value inside the file
    ```js
    import myFunction from "./that-function-file.js";
    ```
- Destructuring
    - Array Destructing
        - left side must be write like an array
        - Array index does matter during array destructing
        - Variable name doesn't matter during array destructuring
    ```js
    const [num1, num2, num3, num4] = numbers;
    ```
    ```js
    const [firstNumber, secondNumber, ...restNumbers] = numbers;
    ```
    - Object Destructing
        - left side must be write like an object
        - Serial doesn't matter in object destructuring
        - Variable name must match property name
    ```js
    const {name, age, address, phone} = person;
    ```
    ```js
    const {name, age, ...rest} = person;
    ```
    - rest operator also can be used in destructing
- Ternary Operator
    - ***Condition ? execute_if_true : execute_if_false***
    ```js
    isPassed === true ? console.log('You have passed') : console.log('You have failed');
    ```
- Promise
    - async
    - await
    ```js
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                msg: 'Welcome next level developer',
            };
            const error = true;
            if (!error) {
                resolve(data);
            }
            else {
                    reject({ msg: 'Goodbye developer. I amd in danger..........' });
            }
        }, 1500)
    })
    
    async function getData() {
        try {
            const data = await myPromise;
            console.log(data, 'try block');
        } catch (error) {
            console.log(error, 'catch block');
        }
    }
    ```