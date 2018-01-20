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

// 2. Sum function that takes the array and adds all numbers inside

function reductor(total, current) {
  return total + current
}

function sumArrayItem(array) {
  var sum = array.reduce(reductor);
  return sum;
}

console.log(sumArrayItem(rangedArray));

//3. Take an optional argument "step" for the count; default step = 1 (full function below; sumArrayItem function repeated).

var rangedArray = [];

function ranged(start, end, step = 1) {

  for (var i = start; i <= end; i+=step) {
    rangedArray.push(i);
  }
  return rangedArray
}

console.log(ranged(1, 10, 2))

function reductor(total, current) {
  return total + current
}

function sumArrayItem(array) {
  var sum = array.reduce(reductor);
  return sum;
}

console.log(sumArrayItem(rangedArray));

//4. Make sure it handles decreasing range (i.e. (5, 2, -1)).

var rangedArray = [];

function ranged(start, end, step = 1) {

  for (var i = start; i <= end; i+=step) {
    rangedArray.push(i);
  }
  for (var i = start; i >= end; i+=step) {
    rangedArray.push(i);
  }
  return rangedArray
}

console.log(ranged(10, 2, -2))

function reductor(total, current) {
  return total + current
}

function sumArrayItem(array) {
  var sum = array.reduce(reductor);
  return sum;
}

console.log(sumArrayItem(rangedArray));
