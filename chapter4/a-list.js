/* Write a function arrayToList that builds up a data structure
* {value: 10, rest: {value: 20, rest: null}} when given [1, 2, 3] as argument, 
* and write a listToArray function that produces an array from a list.
*/

//1. ArrayToList:
var arr = [10,20];

function arrayToList(array) {
  for (var i = array.length-1; i >= 0; i--) {
    var list = {value: array[i], rest: list||null}
  }
  return list
}

console.log(arrayToList(arr))

//2. ListToArray

