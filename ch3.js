// minimum
function min(num1, num2) {
  return num1 < num2 ? num1 : num2
}
console.log(min(0, 0));

// recursion
function isEven(aNumber) {
  console.log("testing " + aNumber)
  if (aNumber == 0) {
    return true;
  } else if (aNumber == 1) {
    return false;
  } else {
    return isEven(aNumber-2);
  }
}
console.log(isEven(50));

// bean counting
function countBs(aString) {
  return countChar(aString, 'B')
}
console.log(countBs("BBC"));

function countChar(aString, aCharacter) {
  var charCount = 0;
  for (index = 0; index < aString.length; index++) {
     if (aString.charAt(index) === aCharacter)
       charCount++;
  }
  return charCount;
}
console.log(countChar("kakkerlak", "k"));

