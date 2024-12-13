
// Async/Await:-
// Introduced in ES8 (ES2017), async/await is built on top of Promises and allows for writing asynchronous code 
// in a synchronous-looking manner, improving readability and reducing callback nesting.

// Example: Using Async/Await

function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = true; // Change to `false` to simulate an error
            if (success) {
                const data = { id: 1, name: "Alice" };
                resolve(data);
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchDataFromServer(); // Pauses until the promise resolves/rejects
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();

// Explanation:

// async makes a function asynchronous, meaning it will always return a promise.
// await pauses the execution of the function until the promise is resolved/rejected.
// try/catch blocks handle errors gracefully.





