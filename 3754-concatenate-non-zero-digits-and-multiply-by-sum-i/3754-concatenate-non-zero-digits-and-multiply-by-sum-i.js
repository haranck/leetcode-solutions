/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let str = n.toString().split('0').join('').split('')
    let x = 0
    for (let num of str) {
            x+= +num
    }
    return str.join('') * x
};