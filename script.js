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

  console.log(Number.isInteger(pwLength))

  if (pwLength < 8 || pwLength > 128 || Number.isInteger(pwLength) === false) {
    alert("Please input an integer between 8 and 128");
    return;
  }

  uppercasePrompt();

  lowercasePrompt();

  numericPrompt();

  specialPrompt();

  if (uppercase.confirm != "Y" && uppercase.confirm != "y" && uppercase.confirm != "Y" && uppercase.confirm != "y" &&
    uppercase.confirm != "Y" && uppercase.confirm != "y" &&
    uppercase.confirm != "Y" && uppercase.confirm != "y") {
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
    if (charObj.confirm === "Y" || charObj.confirm === "y") {
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
