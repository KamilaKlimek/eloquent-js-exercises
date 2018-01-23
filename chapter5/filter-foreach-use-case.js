/* The ancestry example illustrates forEach usage well.
* NOTE filter function was deliberately built out in the book to show the mechanism of it.
*/
//Fetching yound people using a for loop
function filter(array, test) {
  var passed = [];
  for(var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925
}))
//Fetching young people using a for loop.
function filter(array, test) {
  var passed = [];
  ancestry.forEach(function (member) {
    if (test(member))
      passed.push(member);
  });
return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925
}))
