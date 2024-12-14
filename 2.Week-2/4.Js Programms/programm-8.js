
// Tip Calculator :-

// Example 1:
// Input: 60.75, 0.25
// Output: 75.94
// Example 2:
// Input: 90.00, 0.10
// Output: 99


var number ;
function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
};

console.log(calculateTip(100.50 , 0.15));