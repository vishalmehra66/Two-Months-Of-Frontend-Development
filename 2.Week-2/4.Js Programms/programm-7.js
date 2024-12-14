
// Programm for temperature convertor :-
// Example 1:
// Input: 25, "C"
// Output: "77.00 F"
// Example 2:
// Input: -40, "F"
// Output: "-40.00 C"

function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

console.log(convertTemperature(37 , "C"));
console.log(convertTemperature(25 , "C"));
console.log(convertTemperature(108 , "F"));
console.log(convertTemperature(35 , "v"));