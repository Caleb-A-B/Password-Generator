// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var uppercaseArr = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
var lowercaseArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
var characterArr = ["!", "@", "#", "$", "%", "^", "&", "*",]
var password = "";
//var "title" confirm area

//arrays holding ocnfirm
var combine= [];
//validate input


// Write password to the #password input
function writePassword() {
  console.log("Button Clicked");

  //dont add under a function, may conflict
  console.log(number[(Math.floor(Math.random() * number.length))]);
  console.log(lowecase[(Math.floor(Math.random() * lowercase.length))]);
  console.log(uppercase[(Math.floor(Math.random() * uppercase.length))]);
  console.log(character[(Math.floor(Math.random() * character.length))]);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//make an else if section for each type, use true/false

//wriiting password
function writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  console.log(
  )
}