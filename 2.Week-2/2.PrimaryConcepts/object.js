
// JavaScript program that demonstrates creating objects, accessing and modifying properties, adding methods, and common operations related to objects:

// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "USA"
    },
    // Adding a method to the object
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Displaying the entire object
console.log("Person object:", person);

// Accessing properties using dot notation
console.log("First name:", person.firstName);
console.log("Last name:", person.lastName);

// Accessing properties using bracket notation
console.log("Age:", person['age']);

// Modifying properties
person.age = 31;
console.log("Modified age:", person.age);

// Adding a new property
person.gender = "Male";
console.log("Added property (gender):", person.gender);

// Deleting a property
delete person.isEmployed;
console.log("Object after deleting isEmployed property:", person);

// Accessing nested object properties
console.log("City:", person.address.city);

// Calling a method
console.log("Full Name:", person.getFullName());

// Checking if a property exists using 'in' operator
console.log("Does 'age' exist in person?", 'age' in person);

// Looping over properties using for...in loop
console.log("Properties of person object:");
for (let key in person) {
    // Checking if the property is directly on the object (not inherited)
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Getting keys of the object using Object.keys()
let keys = Object.keys(person);
console.log("Keys of the object:", keys);

// Getting values of the object using Object.values()
let values = Object.values(person);
console.log("Values of the object:", values);

// Getting entries (key-value pairs) of the object using Object.entries()
let entries = Object.entries(person);
console.log("Entries of the object:", entries);

// Using a computed property name
let dynamicKey = 'hobby';
person[dynamicKey] = 'Reading';
console.log("Object with computed property (hobby):", person);

// Creating a copy of the object using Object.assign()
let copiedPerson = Object.assign({}, person);
console.log("Copied object using Object.assign():", copiedPerson);

// Creating a copy using spread operator
let spreadCopiedPerson = { ...person };
console.log("Copied object using spread operator:", spreadCopiedPerson);

// Comparing objects (will compare references, not deep values)
console.log("Are original and copied objects the same?", person === copiedPerson);

