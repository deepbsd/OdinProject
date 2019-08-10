const sumAll = function(first, second) {
    if (typeof second != 'number' || first < 0 || second < 0) return 'ERROR'

    if (first > second) {
        let temp = first; first = second; second = temp;
    }

    let total = 0
    for (let i=first; i<=second; i++){
        total += i
    }

    return total 
}

module.exports = sumAll
