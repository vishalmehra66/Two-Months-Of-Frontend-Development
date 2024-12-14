
// Programm for - ES6: Template Literals and Spread Operator

//Template Literals
const name = "Alice";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.


// Spread operator 
const numbers1 = [1, 2, 3 ,7, 8, 9, 12];
const numbers2 = [4, 5, 6];
console.log(...numbers1);
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);   // Output: [ 1, 2, 3, 7, 8, 9, 12, 4, 5, 6]