// Assignment Code
var generateBtn = document.querySelector("#generate");

// use \ before " and \ to store the value that I want
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberCharacters = "0123456789".split("");



function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain? (Please have your answer between 8 and 128.)'),
    10
  );

  
  // check the if the length of password < 8 or > 128
  if (length < 8) {
    alert("Your password is too short!");
    return;
  } else if (length > 128) {
    alert("Your password is too long!")
    return;
  }

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number!");
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var withSpecialCharacters = confirm(
    "Do you want to have special character(s) inside your password?"
  );
  var withLowercase = confirm(
    "Do you want to have lower-case charater(s) inside your password?"
    );
  var withUppercase = confirm(
    "Do you want to have upper-case charater(s) inside your password?"
    );
  var withNumber = confirm(
    "Do you want to have numer(s) inside your password?"
    ); 

   // Object to store user input
   var passwordOptions = {
    length: length,
    specialCharacters: withSpecialCharacters,
    lowercase: withLowercase,
    uppercase: withUppercase,
    number: withNumber,
    }

   return passwordOptions;
}



// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  } 
  if (options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }
  if (options.uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  } 
  if (options.number) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }

  result = result.concat(guaranteedCharacters);
  
  for (i = result.length ; i < options.length ; i++) {
    result.push(getRandom(possibleCharacters));
  }
  


    // Transform the result into a string and pass into writePassword
    return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);