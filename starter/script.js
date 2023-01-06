// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var length = prompt("How many characters will your password be?");
if (length  < 8){
  alert("Oops, your password has to be at least 8 characters"); 
}
else if (length > 64){
  alert("Oops your password has to be less than 65 characters");
}
var lowChar = confirm("Will your password use lowerchase characters?");
if (lowChar === false) {
  alert("Oops, you have to include lowercase characters");
}
var upChar = confirm("Will your password use uppercase characters?");
if (upChar === false) {
  alert("Oops, you have to include uppercase characters");
} 
var num = confirm("Will your password use numeric characters?");
if (num === false) {
  alert("Oops, you have to include numeric characters");
} 
var spesh = confirm("Will your password use special characters?");
if (spesh === false) {
  alert("Oops, you have to include uppercase characters");
} 
}

getPasswordOptions()
// calls function but without this function doesn't run when generate password button is pressed
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);