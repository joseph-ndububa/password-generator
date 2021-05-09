// arrays of all characters
const number = {
  chars: "0123456789"
  confirm: ""
}

const uppercase = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  confirm: ""
}

const lowercase = {
  chars: "abcdefghijklmnopqrstuvwxyz";
  confirm: ""
}

const specials = {
  chars: "!#$%&*+-./:;<=>?@ ^_~";
  confirm: ""
}

// Prompt functions

function lengthPrompt() {
  const pwLength = prompt("Please choose a password length between 8 and 128 characters")
}

function lowercasePrompt() {
  const lower = prompt("Include lower case characters? Input Y for yes, N for no.")
}

function uppercasePrompt() {
  const upper = prompt("Include lower case characters? Input Y for yes, N for no.")
}

function numericPrompt() {
  const numeric = prompt("Include numeric characters? Input Y for yes, N for no.")
}

function specialPrompt() {
  const special = prompt("Include special characters? Input Y for yes, N for no.")
}

function promptSequence() {

  lengthPrompt();

  uppercasePrompt();

  lowercasePrompt();

  numericPrompt();

  uppercasePrompt();

  specialPrompt();

  numericPrompt();

  generatePassword()

}

// password generation function

function generate() {

  if (lower === "Y" && upper === "Y" && numeric === "Y" && special === "Y") {
    const selection = string.concat(numberChars, uppercaseChars, lowercaseChars, specialChars)
  }

  else if (lower === "Y" && upper === "Y" && numeric === "Y" && special === "N") {
    const selection = string.concat(numberChars, uppercaseChars, lowercaseChars, specialChars)
  }



  for (i = 0; i < pwLength; i++) {

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
generateBtn.addEventListener("click", promptSequence);
