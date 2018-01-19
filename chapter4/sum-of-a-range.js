/* Write a range function that takes two arguments, start and end, and returns array.
* Next write a sum function that takes the array and adds numbers
* Modify range function to take an optional arg that indicates step.
*/

// 1. Basic range function; returns array

var rangedArray = [];
function ranged(start, end) {
  for (var i = start; i < end; i++) {
    rangedArray.push(i);
  }
  return rangedArray
}
console.log(ranged(0,5))

// 2. Sum function that takes the array and adds numbers inside

function sumArrayItem(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
}
console.log(sumArrayItem(rangedArray));
