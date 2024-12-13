

/*
setTimeout(): This method is used to execute a function once after a specified delay (in milliseconds). 
It takes two parameters: the function to be executed and the delay time.

Syntax:
        setTimeout(function, delay);

        In this syntax, the first parameter is the function that will be executed after the specified delay. The second parameter is the delay time in milliseconds.
Any additional parameters after the delay time will be passed to the function as arguments. These arguments can be accessed inside the function using the arguments object.
        setTimeout(function, delay, arg1, arg2, ...);

*/

// write a programm to display a message after 3 seconds

// display a text using the setTimeout method
        
    function greet() {
        console.log('This will appear next. Hello World!');
    }

    console.log("Function Runing...")
    setTimeout(function() {
        console.log("This message appears after 3 seconds");
        greet();
    }, 3000);

// Output
// "This message appears after 3 seconds"
// "This will appear next. Hello World!"

// write a programm of setTimeout which tack two aguments 

    // function sayHello(Name , Message){
    //     console.log(`Hello , ${Name} ,${Message}`)
    // }

    // console.log("The msg is show after the delay of 3 Seconds...");
    // setTimeout(sayHello, 3000 , "Vishal" , "How are you!");

// Output
// Hello, John! How are you?     // After 3 seconds