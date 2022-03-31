// 1.
// We have a “regular” function. How to call async from it and use its result?
// GOOD LUCK!

function delay(ms) {
    // your code

    const result = new Promise(resolve => {
        setTimeout(() => {
            resolve("First task ");
        }, ms);
    });

    return result;
}

delay(3000).then(succes => console.log(succes + "runs after indicted time"));
