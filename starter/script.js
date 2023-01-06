// Array of special characters to be included in password
var specialChar = [
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
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerChar = [
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
var upperChar = [
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
// if (isNaN(length) || length < 8 || length > 64) {
  // alert("Oops. Input not valid");
if (length  < 8){
  alert("Oops, your password has to be at least 8 characters"); 
}
else if (length > 64){
  alert("Oops your password has to be less than 65 characters");
}
else if (isNaN(length)){
  alert("Oops, input is not valid, please enter a number")
  return
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

// getPasswordOptions()
// calls function but without this function doesn't run when generate password button is pressed
// Function for getting a random element from an array
function getRandom(arr) {
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomSymbol() {
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  }
}

// Function to generate password with user input
// generateBtn.addEventListener("click", () => {
//   const length = passLength.value;
//   const numbers = includeNumbers.checked;
//   const symbols = includeSymbols.checked;
//   result.value = generatePassword(numbers, symbols, length);
// });
function generatePassword() {
  console.log("You clicked the button");


  return (password)
  // let generatedPassword = "";
  // let variationsCount = [number, symbol].length;
  // for (let i = 0; i < length; i += variationsCount) {
  //   if (number) {
  //     generatedPassword += getRandomNumber();
  //   }
  //   if (symbol) {
  //     generatedPassword += getRandomSymbol();
  //   }
  //   generatedPassword += getRandomLower();
  // }
  // const finalPassword = generatedPassword.slice(0, length);
  // return finalPassword;
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