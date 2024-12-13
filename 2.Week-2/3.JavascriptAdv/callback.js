

/*
Callbacks:-
A callback function is a function passed as an argument to another function, which is executed later. 
It's a common way to handle asynchronous code in JavaScript.
*/

// Example: Using Callbacks

function fetchDataFromServer(callback) {
    console.log("Fetching Data...");

    setTimeout(() => {
        const data = { name: "vishal", age: 22 };
        console.log("Data fetched from the server");
        callback(data); // call the callback function with the fetch data
    }, 3000);
}

function processData(data) {
    console.log("Processing Data :", data);
}

fetchDataFromServer(processData);


// Explanation:-
// fetchDataFromServer simulates fetching data from a server with a delay using setTimeout().
// processData is passed as a callback and is executed after the data is fetched.
