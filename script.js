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
  chars: '!#$%&*,+-./:;<=>?@^_',
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
  uppercase.confirm = window.confirm("Include upper case characters?")
};

function lowercasePrompt() {
  lowercase.confirm = window.confirm("Include lower case characters?")
};

function numericPrompt() {
  number.confirm = window.confirm("Include numeric characters?")
};

function specialPrompt() {
  specials.confirm = window.confirm("Include special characters?")
};

function promptSequence() {

  lengthPrompt();

  if (pwLength < 8 || pwLength > 128 || Number.isInteger(pwLength) === false) {
    alert("Please input an integer between 8 and 128");
    return;
  }

  uppercasePrompt();

  lowercasePrompt();

  numericPrompt();

  specialPrompt();

  if (uppercase.confirm === false && lowercase.confirm === false && number.confirm === false && specials.confirm === false) {
    alert("Please select at least one character type");
    return;
  }

  writePassword();

};



// password generation function

function generatePassword() {

  /* iterate through char objects to see if the user wants each character type, then
  add selected char types to a new array. randomly loop through this new array to create a new password

  */
  charArray.forEach(function (charObj) {
    if (charObj.confirm === true) {
      passChars.push(charObj.chars);
    }
  })

  passChars = passChars.join("");

  for (i = 0; i < pwLength; i++) {
    passArray.push(passChars[Math.floor(Math.random() * (passChars.length - 1))]);
  }

  const newPassword = passArray.join("");

  console.log(newPassword)
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
