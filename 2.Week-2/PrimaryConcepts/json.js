
// Example Program Demonstrating JSON in JavaScript

// Creating a JavaScript object
let student = {
    name: "John Doe",
    age: 21,
    isGraduated: false,
    subjects: ["Mathematics", "Physics", "Computer Science"],
    address: {
        city: "Metropolis",
        country: "Countryland"
    }
};

// Converting the JavaScript object to a JSON string using JSON.stringify()
let jsonString = JSON.stringify(student);
console.log("JSON Stringified data:", jsonString);

// Parsing the JSON string back to a JavaScript object using JSON.parse()
let parsedObject = JSON.parse(jsonString);
console.log("Parsed JavaScript Object:", parsedObject);

// Accessing properties from the parsed object
console.log("Student Name:", parsedObject.name);
console.log("Subjects:", parsedObject.subjects);
console.log("City:", parsedObject.address.city);

/*
What is JSON?
JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that's easy for humans to read and write 
and easy for machines to parse and generate. JSON is often used to exchange data between a web client and a server or between 
different applications. It is derived from JavaScript but is language-independent and supported by many modern programming languages.

JSON Characteristics:-
Data is represented as key-value pairs, similar to JavaScript objects.
Keys must be strings enclosed in double quotes (" ").
Data types supported include:
Strings (enclosed in double quotes)
Numbers
Booleans (true and false)
null
Arrays
Objects
Example JSON:
json
Copy code
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "hobbies": ["reading", "traveling", "swimming"],
  "address": {
    "street": "123 Main St",
    "city": "Wonderland",
    "postalCode": "12345"
  }
}
Working with JSON in JavaScript-
You can work with JSON in JavaScript using two main methods:

JSON.stringify(): Converts a JavaScript object or value to a JSON string.
JSON.parse(): Converts a JSON string to a JavaScript object.

Explanation:-
Creating an Object:
We create a JavaScript object student with different data types, including an array and a nested object.

Stringifying the Object:
The JSON.stringify() method converts the student object into a JSON string. This process is useful when sending data over a network.

Parsing the JSON String:
The JSON.parse() method converts the JSON string back to a JavaScript object. This process is useful when receiving JSON data from a server.

Accessing Properties:
You can access the parsed data just like any JavaScript object. For example, parsedObject.name gives the name of the student.

When to Use JSON:
Data transfer: Commonly used in REST APIs for data exchange.
Configuration files: Used for configuration settings in various systems.
Storing structured data: Preferred format for storing structured data in files or databases.

 */

