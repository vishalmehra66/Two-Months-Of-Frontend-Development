
// Write a programm to calculate BMI of human body which tack two arguments body weight, 
// and height of the person.

var weight ;
var height;

function calculateBMI(weight, height) {
  
    const bmi = weight / (height * height);
{
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
};

const result =  calculateBMI(56 , 1.65);
console.log(result);