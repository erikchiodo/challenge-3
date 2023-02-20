// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password_length = 0;

  function passwordFunction() {
    password_length = Math.floor(
      Number(
        prompt("Please enter password length. Choose a number between 8 & 128.")
      )
    );
    console.log("password length", password_length);
  }

  passwordFunction();

  // Password Alert Messages
  if ((password_length < 8 || password_length > 128) && password_length != 0) {
    alert(
      "***Incorrect Password Length*** Please refresh page and re-enter correct value. Thank you!"
    );
  }
  if (password_length >= 8 && password_length <= 128) {
    alert("Password length accepted. Please proceed");
  }
  //   If user inputs 0 or cancels, it will revert them to original prompt
  if (password_length == 0) {
    password_length = Math.floor(
      Number(
        prompt("Please enter password length. Choose a number between 8 & 128.")
      )
    );
  }

  // Password Object (for lowercase characters, upper characters, special characters, numbers)
  var password_details = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "@#$%^&*()?<>~",
    number: "0123456789",
  };

  var password_string = "";
  // Confirm statements (lower, upper, special, number)
  if (
    confirm(
      "Do you want lowercase letters in your password? Press OK for yes and Cancel for no"
    )
  ) {
    password_string = password_string + password_details.lower;
  }

  if (
    confirm(
      "Do you want uppercase letters in your password? Press OK for yes and Cancel for no"
    )
  ) {
    password_string = password_string + password_details.upper;
  }

  if (
    confirm(
      "Do you want special characters in your password? Press OK for yes and Cancel for no"
    )
  ) {
    password_string = password_string + password_details.special;
  }

  if (
    confirm(
      "Do you want numbers in your password? Press OK for yes and Cancel for no"
    )
  );
  password_string = password_string + password_details.number;

  //   For testing purposes
  console.log(password_string);

  var password = "";
  // Loop to generate password
  for (var i = 0; i < password_length; i++) {
    const randomIndex = Math.floor(Math.random() * password_string.length);
    password = password + password_string[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
