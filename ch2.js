// looping a triangle
var x='#';
do {
  console.log(x);
  x += '#';
} while (x.length <= 7);

// fizzbuzz
for (count = 0; count < 100; count++) {
  var currentNumber = count+1;
  var currentOutput = '';
  if (currentNumber % 3 == 0)
    currentOutput += 'Fizz';
  if (currentNumber % 5 == 0)
    currentOutput += 'Buzz';
  console.log(currentOutput || currentNumber);
}

// chessboard
var lastCharacter = ' ';
var mutableString = '';
var size = 8;
for (row = 0; row < size; row++) {
  for (column = 0; column < size; column++ ) {
    mutableString += lastCharacter;
    if (column == size-1)
      mutableString += '\n'
    else
      lastCharacter = lastCharacter === ' ' ? '#' : ' ';
  }
}
console.log(mutableString);

