// Assignment code here
 function generatePassword(characterAmount, includeUppercase, 
  includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharcters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharcters.push(String.fromCharCode(characterCode))
  }
  return passwordCharcters.join('')

 }


  function arrayfromlowtohigh(low, high){
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
  const UPPERCASE_CHAR_CODES = arrayfromlowtohigh(65, 90)
  const LOWERCASE_CHAR_CODES = arrayfromlowtohigh(97, 122)
  const NUMBER_CHAR_CODES = arrayfromlowtohigh(48, 57)
  const SYMBOL_CHAR_CODES = arrayfromlowtohigh(33, 47).concat(
    arrayfromlowtohigh(58, 64)
  ).concat(
    arrayfromlowtohigh(91, 96)
  ).concat(
    arrayfromlowtohigh(123, 126)
  )

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(10,true,true,true);
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

