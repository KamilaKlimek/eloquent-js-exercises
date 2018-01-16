/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
*  At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*  Passing this string to console.log should show something like this:
* # # # #
*# # # #
* # # # #
*# # # #
* # # # #
*# # # #
* # # # #
*# # # #
* When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, 
* outputting a grid of the given width and height.
*/
// I assumed here that the author meant to produce a square X by X grid (i.e. 8 x 8). If you want a rectangle (like the one in the example)
//simply change the .repeat(size) to .repeat(y), for example .repeat(4) for the grid in the example.


var chessBoard = "";
var size = 9;
var i = 1;
for (i = 1; i < size; i++) {
  if (i % 2 === 0) {
    console.log((" " + "#").repeat(size));
  }
  if (i % 2 !==0) {
    console.log(("#" + " ").repeat(size));
  }
}
