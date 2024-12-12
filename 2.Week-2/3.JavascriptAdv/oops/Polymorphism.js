/*
4. Polymorphism
Polymorphism means "many forms" and allows objects to be treated as instances of their parent class rather than their actual class. The behavior can vary based on the object that is calling the method.

Method Overriding: A child class can provide a specific implementation of a method already defined in its parent class.
Method Overloading (not directly supported in JavaScript but possible through different approaches): Multiple functions with the same name but different parameters.
*/

// Example (Method Overriding):

class Shape {
    draw() {
        console.log("Drawing a generic shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

let shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => shape.draw());

// Output:
// Drawing a generic shape
// Drawing a circle
// Drawing a square