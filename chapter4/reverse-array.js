// Not using reverse method, reverse an array. 
// 1. By creating a new array with values inversed.
var arrayOrg = ["a", "b", "c", "d", "e"];

function reverseArr(array) {
  var reversedArr = [];
  for (var i = 0; i <array.length; i++) {
    reversedArr.unshift(arrayOrg[i]);
  }
  return reversedArr
}

console.log(reverseArr(arrayOrg));

// 2. By modifying the existing array.
