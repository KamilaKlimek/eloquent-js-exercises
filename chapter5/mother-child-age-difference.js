/* Compute average age difference between mothers and children.
* Dataset @ eloquentjavascript.net
*/
//Function for average

function average(array) {
  function sum(a, b) {return a + b; }
  return array.reduce(sum) / array.length;
}

// Function byName - links name to the object it represents

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//Age difference between kids and their moms

var ageDifferences = ancestry.filter(function(person) { 
  return byName[person.mother] != null;               //filters out kids with undefined moms
}).map(function(person) {
  return person.born - byName[person.mother].born;    //returns new array of age differences between kids and their moms
});

//Average age difference

console.log(average(ageDifferences));
