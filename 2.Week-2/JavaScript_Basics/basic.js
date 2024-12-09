
//  basic programms of JavaScript:-  //


// variable   -  variable is the name of memory location where we store the data.
var a = 20;
var b = "vishal";

let c = 10;
let d = a + c;
console.log(d);


// datatypes -
//JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. 
// It also means that data types are automatically converted as-needed during script execution.


// operators 
let x = 10;
let y = 5;
let sum = x + y; // sum is 15


// if-else condition 

 let temp = 45;
 if(temp > 30)
 { console.log("there is hot outside");}
 else {
    console.log("there is cold outside");
 }


// loop 

for(let i = 0 ; i <= 10 ; i++){
    console.log("count :", i );
}


// function and function calling 

function greet(name){
    return "hello " + name;  // using variable
}
console.log(greet("vishal"));  


function greet2(name){
    console.log(`Hello ${name}`) // using temp literals
}
greet2("vishal");


// Objects 
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greets: function() {
      return "Hi, I'm " + this.name;
    }
  };

  console.log(person);
  console.log(person.name);
  console.log(this.greets);
  