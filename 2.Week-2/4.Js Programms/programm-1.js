

//Programm for Regular Expressions: Email Validation

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(validateEmail("john.doe@example.com")); // Output: true
console.log(validateEmail("invalid_email")); // Output: false
console.log(validateEmail("cishal@ramail.som"));



// Phone number validation 

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

console.log(validatePhoneNumber("1234567890")); // Output: true
console.log(validatePhoneNumber("123-456-7890")); // Output: false