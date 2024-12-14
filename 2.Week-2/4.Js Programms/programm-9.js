
// Palindrome Checker  :-

/*
Example 1:
Input: "RaceCar"
Output: true
Example 2:
Input: "Hello"
Output: false
*/
 
function isPalindrome(str) {
   
    const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
} 

console.log(isPalindrome("carracer"));
console.log(isPalindrome("racecar"));