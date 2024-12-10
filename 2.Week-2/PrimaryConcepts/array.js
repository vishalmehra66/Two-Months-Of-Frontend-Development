

// Creating an array
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

// Displaying the array
console.log("Original array:", fruits);

// Accessing elements in an array
console.log("First element:", fruits[0]);
console.log("Last element:", fruits[fruits.length - 1]);

// Modifying an element in the array
fruits[1] = 'Blueberry';
console.log("Array after modification:", fruits);

// Adding an element at the end using push()
fruits.push('Pineapple');
console.log("Array after push:", fruits);

// Removing the last element using pop()
let removedElement = fruits.pop();
console.log("Array after pop:", fruits);
console.log("Removed element:", removedElement);

// Adding an element at the beginning using unshift()
fruits.unshift('Strawberry');
console.log("Array after unshift:", fruits);

// Removing the first element using shift()
let firstRemoved = fruits.shift();
console.log("Array after shift:", fruits);
console.log("Removed first element:", firstRemoved);

// Finding the length of the array
console.log("Length of the array:", fruits.length);

// Iterating over the array using a for loop
console.log("Iterating over the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach() method to iterate
console.log("Using forEach() method:");
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});
