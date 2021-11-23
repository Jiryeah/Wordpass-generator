// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword (){
  // Available Characters 
  var specialCharacters = '!, ", #, $, %, &, (, ), *, +, ",", -, ".", /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~,';
  var numericCharacters = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9';
  var lowerCaseLetters = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z';
  var upperCaseLetters = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
  var finalPassword = '';
  var availableCombo = '';
  
  // Prompt to inform the user to choose between 8-128 characters
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");

    if ((passwordLength >= 8) || (passwordLength <= 128)) {
    console.log(passwordLength)
  }
  // if it doesn't mean this criteria, create an alert to notify the user 
  else {
    window.alert ("The password must be between 8 and 128 characters. Please try again.")
    return "";
  };

  // Create the confirm windows to aid in the decision of the compostition of the password. 
  var specialCharacters = confirm("Would you like to use any special characters to fortify the password?");
  var numericCharacters = confirm("Would you like to use numbers to fortify your password?");
  var lowerCaseLetters = confirm("Would you like to use lowercase letters to fortify your password?");
  var upperCaseLetters = confirm("Would you like to use any uppercase letters to fortify your password? ");
  // End of Confirm Windows

  // Create the conditionals to direct the results gathered from the confirm windows.
  if (specialCharacters) {
    availableCombo += specialCharacters;
  }

  if (numericCharacters) {
    availableCombo += numericCharacters;
  }

  if (lowerCaseLetters) {
    availableCombo += lowerCaseLetters;
  }

  if (upperCaseLetters) {
    availableCombo += upperCaseLetters;
  }

  if (!specialCharacters && !numericCharacters && !lowerCaseLetters && !upperCaseLetters) {
    return window.alert("One criteria HAS to be me!")
  }
  // End of Conditionals 

  // Create index to randomize the selection. 
  for (var index = 0; index < passwordLength; index++) {
    finalPassword += availableCombo[Math.floor(Math.random () * availableCombo.length)];
    console.log(finalPassword);
    return finalPassword;
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // generatePassword() should return a value
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
