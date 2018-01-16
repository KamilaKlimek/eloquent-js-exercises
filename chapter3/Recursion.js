//Using recursive function (not %%) show whether a passed number is even or odd.

function isEven(x) {
  var xAbs = Math.abs(x);          //Math.abs(x) takes the passed number and returns its absolute value (necessary to evaluate negatives)
  for (var n = 0; n < xAbs; n++) {
    if (xAbs - n*2 === 0) {
      return ("even")
    }
    else if (xAbs - 2*n ===1) {
      return ("odd")
    }
  }

}
console.log(isEven(-7))
