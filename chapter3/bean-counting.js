//Write a function countBs that takes a string as its only parameter and returns a number that
//indicates how many uppercase "b" characters are in the string

function countBs(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count += 1
    }
}
return count
}

console.log(countBs("BBC"));

// Write the same function that accepts second parameter "character" and returns its occurence.

function countChars(str, char) {
  var count = 0                     
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1
    }
}
return count
}

console.log(countChars("BBC", "B"));

// Case ignored, counting each occurrence

function countChars(str, char) {
  var strUpper = str.toUpperCase();     //Normalized to upper case, as by CA1308 standard lower case can't make a round trip
  var charUpper = char.toUpperCase();
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (strUpper[i] === charUpper) {
      count += 1
    }
}
return count
}
console.log(countChars("BbC", "B"));
