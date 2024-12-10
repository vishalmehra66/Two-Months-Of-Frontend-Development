
// Using the readline module in Node.js for input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  let number = Number(input);

  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else if (number === 0) {
    console.log("The number is zero.");
  } else {
    console.log("Invalid input, please enter a number.");
  }

  rl.close(); // Close the interface after processing
});
