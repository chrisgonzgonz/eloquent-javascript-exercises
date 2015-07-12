//1. sum of a range
function range(start, end, step) {
  var rangeNums = [];
  if (start < end) {
    if (!step) 
      step = 1;
    for (start; start <= end; start += step) {
      rangeNums.push(start);
    }
  } else {
    if (arguments.length < 3)
      step = -1;
    for (start; start >= end; start += step) {
      rangeNums.push(start) ;
    }
  }
  return rangeNums;
}
console.log(range(1,10));
console.log(range(1,10,5));
console.log(range(5,2));

  // sum with reduce
function sumReduce(anArray) {
  return anArray.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue; 
  });
}
console.log(sumReduce(range(1,10)));

  // sum without reduce
function sum(anArray) {
  var sum = 0;
  for (var index = 0; index < anArray.length; index++) {
    sum += Number(anArray[index]);
  }
  return sum;
}
console.log(sum(range(1,10)));

// 2. reversing an array
function reverseArray(anArray) {
  var reversedArray = [];
  for (var index = anArray.length-1; index >= 0; index--) {
    reversedArray.push(anArray[index]);
  }
  return reversedArray;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(anArray) {
  var lastIndex = anArray.length - 1;
  for (var index = 0; index <= lastIndex/2; index++) {
    var higherIndex = lastIndex - index;

    // check to see if we're talking about the same index
    if (index != higherIndex) {
    console.log ("index: "+index);
      // swap items in place if different indexes
      var lowerIndexedItem = anArray[index];
      anArray[index] = anArray[higherIndex];
      anArray[higherIndex] = lowerIndexedItem;
    }
    console.log(anArray);
  }
  return anArray;
}
var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));

// 3. a list
function arrayToList(anArray) {
  var list;
  for (index = anArray.length-1; index >= 0; index--) {
    var node = {};
    node.value = anArray[index];
    node.rest = list;
    list = node;
  }
  return list;
}
console.log(arrayToList([10,20]));

function listToArray(aList) {
  var newArray = [];
  while (aList) {
    newArray.push(aList.value) 
    aList = aList.rest;
  };
  return newArray;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, aList) {
  if (!element)
    return aList;
  else
    return {value: element, rest: aList};
}
console.log(prepend(10, prepend(20, null)));

function nth(aList, aNumber) {
  var count = 0;
  while (aList) {
    if (count === aNumber)
      return aList.value;
    if (count > aNumber)
      break;
    aList = aList.rest;
    count++; 
  }
  return null;
}
console.log(nth(arrayToList([10, 20, 30]), 1));

function recursiveNth(aList, aNumber) {
  if (aNumber === 0)
    return aList.value;
  recursiveNth(aList.rest, aNumber - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));

// 4. deep comparison
function deepEqual(item1, item2) {
  if (item1 === item2)
    return true;

  if ((item1 == null || typeof item1 != "object" ) ||
      (item2 == null || typeof item2 != "object"))
    return false;

  if (Object.keys(item1).length != Object.keys(item2).length)
    return false;
  
  for (var prop in item2) {
    if (!(prop in item1) || !deepEqual(item1[prop], item2[prop]))
      return false;
  }

  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
