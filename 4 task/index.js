// 4.
// You need to handle getPosts() function with Promise
// Now you need to handle getPosts() function with async/await
// receive posts and show in console, don't forget about error handling :)
// GOOD LUCK!
function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

function handleGetPostsWithPromise() {
    const result = new Promise((resolve, reject) =>
        getPosts().then(result => {
            if (!result.ok) {
                return reject(result.status);
            }

            resolve(result.json());
        })
    );

    return result
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log("Error", error))
        .finally(() => console.log("Done"));
}

async function handleGetPostsWithAsyncAwait() {
    const result = await getPosts();

    try {
        if (!result.ok) {
            throw result.status;
        }

        const parsedRes = await result.json();
        console.log(parsedRes);
    } catch (error) {
        console.log("Error", result.status);
    } finally {
        console.log("Done");
    }
}

handleGetPostsWithPromise();
handleGetPostsWithAsyncAwait();
