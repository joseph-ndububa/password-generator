// arrays of all characters

const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const specialChars = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~"];
// Prompt functions

function lengthPrompt() {
  let pwLength = prompt("Please choose a password length between 8 and 128 characters")
}

function lowercasePrompt() {
  let lower = prompt("Include lower case characters? Input Y for yes, N for no.")
}

function uppercasePrompt() {
  let upper = prompt("Include lower case characters? Input Y for yes, N for no.")
}

function numericPrompt() {
  let numeric = prompt("Include numeric characters? Input Y for yes, N for no.")
}

function specialPrompt() {
  let special = prompt("Include special characters? Input Y for yes, N for no.")
}

function promptSequence() {
  lengthPrompt()
  if (typeof pwLength === "number" && pwLength >= 8 && pwLength <= 128) {
    lowercasePrompt();
  }
  else {
    lengthPrompt();
  }

  if (lower === "Y" || lower === "y" || lower === "N" || lower === "n") {
    uppercasePrompt();
  }
  else {
    lowercasePrompt();
  }

  if (upper === "Y" || upper === "y" || upper === "N" || upper === "n") {
    numericPrompt();
  }
  else {
    uppercasePrompt();
  }

  if (numeric === "Y" || numeric === "y" || numeric === "N" || numeric === "n") {
    specialPrompt();
  }
  else {
    numericPrompt();
  }

  if (special === "Y" || special === "y" || special === "N" || special === "n") {
    generatePassword();
  }
  else {
    specialPrompt();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
