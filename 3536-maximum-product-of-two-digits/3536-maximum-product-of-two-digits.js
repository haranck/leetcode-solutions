/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let num = String(n).split('')
    let max = 0
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let product = Number(num[i]) * Number(num[j])
            max = Math.max(product, max)
        }
    }
    return max
};