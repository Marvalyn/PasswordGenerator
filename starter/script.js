// Array of special characters to be included in password
var charLength = 8;
var choiceArr = [];

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
  choiceArr =[];

  charLength = prompt("How many characters will your password be?");
if (charLength  < 8){
  alert("Oops, your password has to be at least 8 characters"); 
}
else if (charLength > 64){
  alert("Oops your password has to be less than 65 characters");
}
else if (isNaN(charLength)){
  alert("Oops, input is not valid, please enter a number")
  return
}

var lowChar = confirm("Will your password use lowerchase characters?");
if (lowChar === true) {
  choiceArr = choiceArr.concat(lowerChar);
}
else if (lowChar === false) {
  alert("Oops, you have to include lowercase characters");
}

var upChar = confirm("Will your password use uppercase characters?");
if(upChar === true) {
  choiceArr = choiceArr.concat(upperChar);
}

else if(upChar === false) {
  alert("Oops, you have to include uppercase characters");
} 

var num = confirm("Will your password use numeric characters?");
if(num === true) {
  choiceArr = choiceArr.concat(numChar);
}
else if (num === false) {
  alert("Oops, you have to include numeric characters");
} 

var spesh = confirm("Will your password use special characters?");
if(spesh === true) {
  choiceArr = choiceArr.concat(specialChar);
}
else if (spesh === false) {
  alert("Oops, you have to include special characters");
} 
return true;
}


// Function for getting a random element from an array
// function getRandom(arr) 

function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i ++){
var randomChar = Math.floor(Math.random() * choiceArr.length);
password = password + choiceArr[randomChar];
  }

  return password;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var prompts = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  if(prompts){
    var password = generatePassword();
    passwordText.value = password;
  }
 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);