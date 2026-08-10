/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0
    for (let i = low; i <= high; i++) {
        const num = String(i)
        if (num.length % 2 !== 0) continue
        let mid = num.length / 2
        let left = 0
        let right = 0
        for (let j = 0; j < mid; j++) {
            left += Number(num[j])
            right += Number(num[j + mid])
        }
        if (left === right) {
            count++
        }
    }
    return count
};