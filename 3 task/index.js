// 3.
// Resolve all promises and show in console their status and values
// HINT: Remember about usage of Promise.all(),
// there is a similar method that will help you to resolve all promises
// despite of their results
// GOOD LUCK!

const promise1 = new Promise(res => setTimeout(() => res("done"), 1000));
const promise2 = Promise.reject("Through error");
const promise3 = 6;

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then(values => {
    console.log(`status${values.status},  values${values.value}`);
});
