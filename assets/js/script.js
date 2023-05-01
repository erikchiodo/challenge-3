// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password_length = 0;

  function passwordFunction() {
    password_length = Math.floor(
      Number(prompt("Please enter password length. Choose a number between 8 & 128.")));
    console.log("password length", password_length);
  }
  passwordFunction();

  // Password Alert Messages
    if (password_length < 8 || password_length > 128) {
    alert("***Incorrect Password Length*** Please refresh page and re-enter correct value. Thank you!");
    return;
  } else {
    alert("Password length accepted. Please proceed");
  }

  // Password Object (for lowercase characters, upper characters, special characters, numbers)
  var password_details = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "@#$%^&*()?<>~",
    number: "0123456789",
  };

  var pw_array = [];
  // Confirm statements (lower, upper, special, number)
  if (confirm("Do you want lowercase letters in your password? Press OK for yes and Cancel for no")) 
    {
    pw_array.push(password_details.lower);
    console.log(pw_array);
    }
  if (confirm("Do you want uppercase letters in your password? Press OK for yes and Cancel for no")) 
  {
    pw_array.push(password_details.upper);
    console.log(pw_array);
  }
  if (confirm("Do you want special characters in your password? Press OK for yes and Cancel for no")) 
  {
    pw_array.push(password_details.special);
    console.log(pw_array);
  }
  if (confirm("Do you want numbers in your password? Press OK for yes and Cancel for no"))
  {
    pw_array.push(password_details.number);
    console.log(pw_array);
  } else {
    alert("No characters selected!")
    return;
  }

  var password = "";
  // Loop to generate password
  for (var i = 0; i < password_length; i++) {
    // Creates random number based on the number of indices in array
    let randomIndex = Math.floor(Math.random() * pw_array.length);
    console.log(randomIndex)

    // Selects index based on random number created
    let selectedIndex = pw_array[randomIndex]

    // Generates random numbers based on length of random string
    let randomValue = Math.floor(Math.random() * selectedIndex.length);

    // Selects character based on random number and updates password
    let selectedCharacter = selectedIndex[randomValue]
    password += selectedCharacter
    console.log(password)
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
