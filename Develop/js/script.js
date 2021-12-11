// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var generatePassword = function (){
  // Available Characters 
  var specialCharacters = '!"#$%&( )*+","-"."/:;<=>?@[\]^_`{|}~,';
  var numericCharacters = '0123456789';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var finalPassword = '';
  var availableCombo = '';
  
  // Prompt to inform the user to choose between 8-128 characters
  var passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters."));

    if ((passwordLength >= 8) || (passwordLength <= 128)) {
    console.log(passwordLength)
  }
  // if it doesn't mean this criteriacreate an alert to notify the user 
  else {
    window.alert ("The password must be between 8 and 128 characters. Please try again.")
    return "";
  };

  // Create the confirm windows to aid in the decision of the compostition of the password. 
  var specialCharactersPrompt = confirm("Would you like to use any special characters to fortify the password?");
  var numericCharactersPrompt = confirm("Would you like to use numbers to fortify your password?");
  var lowerCaseLettersPrompt = confirm("Would you like to use lowercase letters to fortify your password?");
  var upperCaseLettersPrompt = confirm("Would you like to use any uppercase letters to fortify your password? ");
  // End of Confirm Windows

  // Create the conditionals to direct the results gathered from the confirm windows.
  if (specialCharactersPrompt) {
    availableCombo += specialCharacters;
  }

  if (numericCharactersPrompt) {
    availableCombo += numericCharacters;
  }

  if (lowerCaseLettersPrompt) {
    availableCombo += lowerCaseLetters;
  }

  if (upperCaseLettersPrompt) {
    availableCombo += upperCaseLetters;
  }

  if (availableCombo.length === 0) {
    return window.alert("One criteria HAS to be met!")
  }

  console.log(availableCombo);
  // End of Conditionals 
  console.log(typeof passwordLength);
  // Create index to randomize the selection. 
  for (var index = 0; index < passwordLength; index++) {
    finalPassword += availableCombo.charAt(Math.floor(Math.random () * availableCombo.length));
    console.log(finalPassword);
  }
  return finalPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // generatePassword() should return a value
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
