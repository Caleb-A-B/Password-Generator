// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Clicked");



var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercaseArr = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var lowercaseArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var characterArr = ["!", "@", "#", "$", "%", "^", "&", "*",];
var password = "";
//var "title" confirm area
// var len = prompt("How many characters would you like your password to contain?");
// if(len < 8 || len > 128) {
//   alert("The length of your password must be between 8 and 128 chracters. Please try again");
// }

//arrays holding ocnfirm
var combine= [];
var lower = confirm("Click OK to confirm including lowercase characters");
//validate input


// Write password to the #password input


  //dont add under a function, may conflict
  console.log(number[(Math.floor(Math.random() * number.length))]);
  console.log(lowecase[(Math.floor(Math.random() * lowercase.length))]);
  console.log(uppercase[(Math.floor(Math.random() * uppercase.length))]);
  console.log(character[(Math.floor(Math.random() * character.length))]);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//make an else if section for each type, use true/false
var len = prompt("How many characters would you like your password to contain?");
if (len <8 || len > 128) {
  alert("The length of your password must be between 88 and 128 characters. Please try again");
}
}
//wriiting password


var enter = parseInt(prompt("You must choose a number between 8 and 128"))
function generatePassword() {
  console.log(
  )
return "Password will be here";
}
function writePassword(){
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}