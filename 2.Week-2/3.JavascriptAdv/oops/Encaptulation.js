


/*
1. Encapsulation
Encapsulation refers to bundling the data (attributes) and methods (functions) that operate on the data into a single unit (an object). It helps in restricting direct access to some of an object's components, which is a means of preventing unintended interference and misuse.

Data hiding: By using access modifiers like private or protected, certain attributes can be hidden from outside access, while providing public methods (getters and setters) for controlled access.

*/

class Student {
    constructor(name, age) {
        this._name = name; // _ signifies a private property by convention
        this._age = age;
    }

    // Getter method for name
    getName() {
        return this._name;
    }

    // Setter method for name
    setName(newName) {
        if (newName) {
            this._name = newName;
        }
    }

    getDetails() {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}

let student1 = new Student("John", 21);
console.log(student1.getDetails()); // Accessing via public method
student1.setName("Doe");
console.log(student1.getDetails());
