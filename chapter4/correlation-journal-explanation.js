/* After the author, function hasEvent "scans" every entry (entry as journal[i]) which contains 
* particular event (i.e. "pizza"). If event occurs in the entry, the value returned
* will not be -1.
*/
function hasEvent(event,entry) {            
  return entry.events.indexOf(event) != -1  
};

/* tableFor builds out our correlation table. We start by building a zero array in a table variable
* and we begin the for loop over our journal in search of a particular event.
* The count starts at index 0, which represents "n00", meaning no (squirrel) no (pizza). If none
* of the following conditions will be met, +1 will be added to that index (first square)
* if the event occurs in the entry, the index 0 + 1, and if none other "if"is met, +1 is
* added to square 1 (n01, no squirrel, pizza),
* If it doesn't, the count is still at 0 and off to the next if.
* Now if the entry for squirrel is true, +2 is added to the index count, so depending on  
* the first if, we are either at index 2 (n10; squirrel no pizza) or index 3 (n11, squirrel, pizza)
* that's where the +1 is added.
*/

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i=0; i<journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) { //
      index += 1;
    }
    if (entry.squirrel) { //true or false: changed into sqrl?
      index += 2;
    }
    table[index] += 1
  }
  return table;
}
