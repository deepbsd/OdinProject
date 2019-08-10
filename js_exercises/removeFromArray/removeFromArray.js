const removeFromArray = function(arr, ...elem) {
    elem.forEach( el => arr = arr.filter( val => el != val ))
    return arr
}

module.exports = removeFromArray
