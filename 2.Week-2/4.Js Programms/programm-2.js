
//Programm for - ES5 and ES6: Arrow Functions and Destructuring

// ES5
const squareES5 = function (x) {
    return x * x;
};


// ES6
const squareES6 = x => x * x;


// Destructuring -  a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Alice 30