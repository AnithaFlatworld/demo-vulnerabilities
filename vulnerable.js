// vulnerable.js
// This file demonstrates an insecure use of the `eval` function.
function executeUserInput(input) {
    // Warning: Using eval to execute user input is dangerous and insecure!
    eval(input); // Vulnerable to injection attacks
}
// Example usage
const userInput = "console.log('This is unsafe!');";
executeUserInput(userInput);

const user = "admin";
const password = "1234";
const query = `SELECT * FROM users WHERE username = '${user}' AND password = '${password}'`; // SQL Injection

function showAlert(input) {
    document.body.innerHTML = input; // Possible XSS vulnerability if input contains malicious code
}
showAlert('<img src="x" onerror="alert(1)">');
const fs = require('fs');
fs.writeFileSync('passwords.txt', 'mySuperSecretPassword123'); // Storing passwords in plain text
