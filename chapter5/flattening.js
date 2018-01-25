/*Use the reduce methos in combination with the concat method to "flatten"
*an array of arrays int a single array that has all the elements of 
*/ the input arrays.

var arrays = [[1,2,3], [4,5], [6]];

//desired output: [1, 2, 3, 4, 5, 6]

// 1. Function flatten
function flatten(array) {
  var flatArray = array.reduce(function (a, b) {
   return a.concat(b);
  })
  return flatArray
} 
console.log(flatten(arrays))

//2. Straight to output
console.log(arrays.reduce(function(a,b) { 
  return a.concat(b);
}));
