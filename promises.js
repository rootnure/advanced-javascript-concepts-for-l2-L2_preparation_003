// Promise

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

// myPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

async function getData() {
    try {
        const data = await myPromise;
        console.log(data, 'try block');
    } catch (error) {
        console.log(error, 'catch block');
    }
}

getData();