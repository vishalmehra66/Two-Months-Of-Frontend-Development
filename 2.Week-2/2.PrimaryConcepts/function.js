
/*Functions in JavaScript:-
Functions in JavaScript are reusable blocks of code that perform a specific task. Functions help make code more modular, reusable, and easier to manage. Functions can take input, perform operations, and return an output.

Types of Functions in JavaScript
1.Function Declaration
2.Function Expression
3.Arrow Function
4.Anonymous Functions
5.Higher-Order Functions
6.Callback Functions

1. Function Declaration
This is the simplest way to define a function using the function keyword. It can be called before or after its definition due to function hoisting.

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

Explanation:
The greet function takes a parameter name and returns a greeting message.
We call the function using greet("Alice").

2. Function Expression
A function can also be assigned to a variable. In this case, it behaves like any other value and can be passed around.

// Function Expression
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

Explanation:
Here, add is a variable that holds an anonymous function.
Function expressions are not hoisted, so they must be defined before they are called.

3. Arrow Functions
Introduced in ES6, arrow functions provide a more concise syntax for writing functions. They are particularly useful for writing short functions.

// Arrow Function
const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // Output: 20

Explanation:
Arrow functions are shorter in syntax. If the function body contains a single expression, you can omit the {} and return keyword.
Arrow functions do not have their own this context, which is useful for certain scenarios in object-oriented programming.

4. Anonymous Functions
Anonymous functions are functions without a name. They are typically used where a function is used as an argument.

// Using an anonymous function as a callback
setTimeout(function() {
    console.log("This message is shown after 2 seconds");
}, 2000);

Explanation:
setTimeout takes a function and a delay as arguments, and the function is executed after the specified time.

5. Higher-Order Functions
Higher-order functions are functions that can take other functions as arguments or return functions as results.

// Higher-order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Function to add numbers
const addNumbers = (x, y) => x + y;

// Function to multiply numbers
const multiplyNumbers = (x, y) => x * y;

console.log(applyOperation(5, 10, addNumbers)); // Output: 15
console.log(applyOperation(5, 10, multiplyNumbers)); // Output: 50

Explanation:
applyOperation is a higher-order function that takes two numbers and an operation (function) as arguments and applies the operation to the numbers.

6. Callback Functions
A callback function is a function passed into another function as an argument to be executed later.

// Higher-order function that accepts a callback
function processUserInput(callback) {
    let name = "Charlie";
    callback(name);
}

// Passing a callback function
processUserInput((name) => {
    console.log(`Hello, ${name}!`);
});
// Output: Hello, Charlie!
Explanation:
The processUserInput function takes a callback as an argument and calls it with the name.
The callback function executes when called.
Example Program Demonstrating Functions*/


// Here's a program that uses various types of functions:

// Function Declaration
function square(number) {
    return number * number;
}

// Function Expression
const cube = function(number) {
    return number * number * number;
};

// Arrow Function
const double = number => number * 2;

// Using functions together
function displayResults(num) {
    console.log(`The square of ${num} is ${square(num)}`);
    console.log(`The cube of ${num} is ${cube(num)}`);
    console.log(`The double of ${num} is ${double(num)}`);
}

displayResults(3);


/* 
Explanation:
The square function is a function declaration.
The cube function is a function expression.
The double function is an arrow function.
displayResults calls these functions to show results for a given number.

Output:
The square of 3 is 9
The cube of 3 is 27
The double of 3 is 6

Recap of Key Points
Functions can be declared in different ways (declaration, expression, arrow).
Functions can accept parameters and return results.
Higher-order and callback functions offer more dynamic ways to handle functionality.
*/