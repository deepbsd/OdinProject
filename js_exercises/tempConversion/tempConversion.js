const ftoc = function(temp) {
    return Math.round((temp-32)*(5/9)*10) / 10;
}

const ctof = function(temp) {
    return Math.round(((temp*(9/5))+32) * 10) / 10;
}

/* yay!  this works!  */

module.exports = {
  ftoc,
  ctof
}
