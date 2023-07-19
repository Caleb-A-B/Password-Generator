// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*?><][{}";

const allChars = uppercase + lowercase + number + symbol;
// if (Btn pushed) {
// function createPassword() {
//   let password = "";
//   password += uppercase[Math.floor(Math.random() * uppercase.length)];
//   password += lowercase[Math.floor(Math.random() * lowercase.length)];
//   password +=number [Math.floor(Math.random() * number.length)];
//   password += symbol[Math.floor(Math.random() * symbol.length)];

//   while(length > password.length ) {
//     password += allchars[Math.gloor(Math.random() * allChars.length)]
//   }
// }}
// function generatePassword() {
//   console.log("Button Clicked");



// var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var uppercaseArr = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
// var lowercaseArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
// var characterArr = ["!", "@", "#", "$", "%", "^", "&", "*",];
// var password = "";
//var "title" confirm area
// var len = prompt("How many characters would you like your password to contain?");
// if(len < 8 || len > 128) {
//   alert("The length of your password must be between 8 and 128 chracters. Please try again");
// }

//arrays holding ocnfirm
// var combine= [];
// var lowercase = confirm("Click OK to confirm including lowercase characters");
// var uppercase = confirm("Click ok to confirm including uppercase characters")
// var number = confirm("Click ok to conifrm including numbers");
// var symbol = confirm("Click ok to confirm using symbols");
//validate input
// if 
//??????????????
// Write password to the #password input


  //dont add under a function, may conflict
  // console.log(number[(Math.floor(Math.random() * number.length))]);
  // console.log(lowecase[(Math.floor(Math.random() * lowercase.length))]);
  // console.log(uppercase[(Math.floor(Math.random() * uppercase.length))]);
  // console.log(character[(Math.floor(Math.random() * character.length))]);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

//make an else if section for each type, use true/false
// var len = prompt("How many characters would you like your password to contain?");
// if (len <8 || len > 128) {
//   alert("The length of your password must be between 88 and 128 characters. Please try again");
// }
// }
//wriiting password
// function writePassword() {}
// generateBtn.addEventListener("click", generatePassword)

// var enter = parseInt(prompt("You must choose a number between 8 and 128"))
// function generatePassword() {
//   console.log(
//   )
// return "Password will be here";
// }
// function writePassword(){
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);}
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
  
}
function getSelectableCharacters() {
  var hasLowercase = confirm("Click OK to confirm including lowercase characters");
  var hasUppercase = confirm("Click ok to confirm including uppercase characters")
  var hasNumber = confirm("Click ok to conifrm including numbers");
  var hasSymbol = confirm("Click ok to confirm using symbols");
  console.log (hasLowercase, hasUppercase, hasNumber, hasSymbol)
  
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
  
  return selectableCharacters ;
  
}

function getRandomNumber(max) {
 return  Math.floor(Math.random() * max )
}
function generatePassword () {

  var result =  ""
  var passwordLength = verifyPasswordLength()  
  var selectableCharacters = getSelectableCharacters()
console.log (passwordLength)
console.log (selectableCharacters)

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