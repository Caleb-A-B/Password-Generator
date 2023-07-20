// Assignment Code
var generateBtn = document.querySelector("#generate");
//identifying variables and string
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*?><][{}";
//creating grab command for generate
const allChars = uppercase + lowercase + number + symbol;
//function for password length determination
function verifyPasswordLength ()  {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  
  if(passwordLength >8 && passwordLength <128){
    return passwordLength;
  } else {
    while(passwordLength <8 || passwordLength >128){

      
      passwordLength = prompt("Please choose a length between 8 and 128")
    }
    return passwordLength ;
  }
  //confirmation of variables for generation
}
function getSelectableCharacters() {
  var hasLowercase = confirm("Click OK to confirm including lowercase characters");
  var hasUppercase = confirm("Click ok to confirm including uppercase characters")
  var hasNumber = confirm("Click ok to conifrm including numbers");
  var hasSymbol = confirm("Click ok to confirm using symbols");
  console.log (hasLowercase, hasUppercase, hasNumber, hasSymbol)
  //boolean for creating pull options
  var selectableCharacters = ""
  if (hasLowercase) {
    selectableCharacters = selectableCharacters + lowercase
  } 
  if (hasUppercase) {
    selectableCharacters = selectableCharacters + uppercase
  } 
  if (hasNumber) {
    selectableCharacters = selectableCharacters + number
  } 
  if (hasSymbol) {
    selectableCharacters = selectableCharacters + symbol
  } 
  //show result
  return selectableCharacters ;
  
}
//randomize available answer
function getRandomNumber(max) {
 return  Math.floor(Math.random() * max )
}
function generatePassword () {

  var result =  ""
  var passwordLength = verifyPasswordLength()  
  var selectableCharacters = getSelectableCharacters()
console.log (passwordLength)
console.log (selectableCharacters)
//function finalizing length of answer
let index =0;
while (index <passwordLength) {
  result = result + selectableCharacters[getRandomNumber(selectableCharacters.length)]
  index = index + 1
}


  return result;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);