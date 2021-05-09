// character objects

const uppercase = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  confirm: ""
};

const lowercase = {
  chars: "abcdefghijklmnopqrstuvwxyz",
  confirm: ""
};

const number = {
  chars: "0123456789",
  confirm: ""
};

const specials = {
  chars: '!#$%&*,+-./:;<=>?@^_~',
  confirm: ""
};

const charArray = [uppercase, lowercase, number, specials];

let passChars = [];

let passArray = [];


// Prompt functions

function lengthPrompt() {
  const length = prompt("Please choose a password length between 8 and 128 characters")
  pwLength = Number(length)
};

function uppercasePrompt() {
  uppercase.confirm = prompt("Include upper case characters? Input Y for yes, N for no.")
};

function lowercasePrompt() {
  lowercase.confirm = prompt("Include lower case characters? Input Y for yes, N for no.")
};

function numericPrompt() {
  number.confirm = prompt("Include numeric characters? Input Y for yes, N for no.")
};

function specialPrompt() {
  specials.confirm = prompt("Include special characters? Input Y for yes, N for no.")
};

function promptSequence() {

  lengthPrompt();

  uppercasePrompt();

  lowercasePrompt();

  numericPrompt();

  specialPrompt();

  writePassword();

};

// password generation function

function generatePassword() {

  charArray.forEach(function (charObj) {
    if (charObj.confirm === "Y" || charObj.confirm === "y") {
      passChars.push(charObj.chars);
    }
  })

  console.log(passChars)

  passChars = passChars.join("");

  for (i = 0; i < pwLength; i++) {
    passArray.push(passChars[Math.floor(Math.random() * (passChars.length - 1))]);
  }

  console.log(passArray)

  const newPassword = passArray.join("");
  return newPassword;
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
