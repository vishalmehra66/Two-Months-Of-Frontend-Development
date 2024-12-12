

// JavaScript program demonstrating the creation of a string, accessing characters, and various string properties and methods:

// Creating a string
let message = "Hello, World!";

// Displaying the string
console.log("Original string:", message);

// Accessing individual characters using index
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);

// Finding the length of the string
console.log("Length of the string:", message.length);

// Converting to uppercase
let upperCaseMessage = message.toUpperCase();
console.log("Uppercase string:", upperCaseMessage);

// Converting to lowercase
let lowerCaseMessage = message.toLowerCase();
console.log("Lowercase string:", lowerCaseMessage);

// Finding the position of a substring
let indexOfWorld = message.indexOf("World");
console.log("Position of 'World':", indexOfWorld);

// Checking if a substring exists
let containsHello = message.includes("Hello");
console.log("Does the string contain 'Hello'?", containsHello);

// Extracting a substring using slice()
let slicedPart = message.slice(0, 5);
console.log("Extracted substring (using slice):", slicedPart);

// Splitting the string into an array of words
let words = message.split(" ");
console.log("String split into words:", words);

// Replacing a part of the string
let replacedMessage = message.replace("World", "Everyone");
console.log("String after replacement:", replacedMessage);

// Trimming whitespace (not needed in this example, but demonstrated)
let stringWithSpaces = "   Trim me!   ";
console.log("Before trim:", `"${stringWithSpaces}"`);
console.log("After trim:", `"${stringWithSpaces.trim()}"`);
