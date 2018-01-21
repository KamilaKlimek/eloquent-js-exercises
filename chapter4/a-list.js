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
var myList = (arrayToList(arr))  //I use myList later
//2. ListToArray

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
  array.push(node.value);
  }
  return array;
}
console.log(listToArray({ value: 10, rest: { value: 20, rest: null } }))

//3. Prepend function to add element to the front of the list
function prepend(element, list) {
  var newList = {value: element, rest:list||null}
  return newList               
}
console.log(prepend(5, myList))
//4. Function nth that returns element at a number position in the list

function nth(list, number) {
  return list[Object.keys(list)[number]]
}
console.log(nth(myList, 4))

