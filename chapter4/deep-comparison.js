/* Write a function, deepEqual, that takes two values and returns true
* only if they are the same value or are objects with the same properties 
* whose values are also equal when compared with a recursive call to deepEqual.
*/
var a = {here: {is: "an"}, object: 2}
var b = {here: 1, object: 2}
var c = {here: 1, object: 2}

//1. Easy solution: JSON.stringify (converts object to JSON string). 
//No guarantee of order. Removes porperties set to undefined. Not ideal. Don't use it.

console.log(JSON.stringify(b) === JSON.stringify(c)) //output: true

//2. Using recursive function (from book's solution)

function deepEqual(a, b) {
    if (a === b) return true;
 //proceeds with comparison if none of them is null and both are objects
    if (a == null || typeof a != "object" ||
    b == null || typeof b != "object")
    return false;
 //setting variable that will count the loops as properties of object a and b
    var propertiesInA = 0, propertiesInB = 0;
 //iterates over properties in a
    for (var property in a)
         propertiesInA += 1;
 //iterates over properties in b while...
    for (var property in b) {
        propertiesInB += 1;
 //...checking if it's NOT in a (which would return false)
 //OR if property values (a[property], b[property]) are not the same. 
        if (!(property in a) || !deepEqual(a[property], b[property]))
        return false;
}
return propertiesInA == propertiesInB;
}
console.log(deepEqual(c, b))

