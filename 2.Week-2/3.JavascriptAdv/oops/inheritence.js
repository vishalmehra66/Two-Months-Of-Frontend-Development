
/*
3. Inheritance
Inheritance allows a class (child or derived class) to inherit properties and methods from another class (parent or base class). It promotes code reuse and establishes a hierarchical relationship between classes.

Base Class (Parent): The class being inherited from.
Derived Class (Child): The class that inherits from the base class.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

let dog = new Dog("Rex");
dog.speak(); // Rex barks

// In the example, Dog inherits properties and methods from Animal. It can also override the speak() method to provide specific behavior.