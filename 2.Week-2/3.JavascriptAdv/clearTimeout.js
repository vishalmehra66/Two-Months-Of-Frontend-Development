
//ClearInterval()         //

// let count = 0;
// function counter(){
//     count++ ;
//     console.log(" Count :" + count)
//     if(count === 5){
//         clearInterval(intervalId)
//         console.log("Counting Stoped.")
//     }
// }

// let intervalId = setInterval( counter , 1000 );



//ClearTimeout()        //

function sayHello() {
    console.log("Hello, World!");
}

const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)

// Now, if you want to cancel the execution of the sayHello function before it runs:
clearTimeout(timerId);