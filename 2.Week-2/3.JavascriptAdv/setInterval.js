
// setInterval(): This method is used to repeatedly execute a function with a fixed time delay between each execution. 
//                It takes two parameters: the function to be executed and the time interval (in milliseconds).
// 
// Syntax:
//     setInterval(function, interval);

// Programm to Display Time Every 3 Second

   function DisplayTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart( 2, '0');
    var minutes = currentTime.getMinutes().toString().padStart( 2, '0');
    var Seconds = currentTime.getSeconds().toString().padStart( 2, '0');

    var timestring = `${hours} : ${minutes} : ${Seconds} `
    console.log(timestring);
   }

   setInterval(DisplayTime , 2000);

// Output
// "12:3:55"
// "12:3:59"
// "12:4:2"
// "12:4:5"
// "12:4:7"
// "12:4:10"
// .
// .
// .
// ..
// The application mentioned above updates the time every 3 seconds.
// After the time period (in this case, 3 seconds), the setTimeout() method only calls the procedure once.
// But because the function in the aforementioned program is calling itself, it updates the time every 3 seconds.
// This program is perpetual (until the memory runs out).