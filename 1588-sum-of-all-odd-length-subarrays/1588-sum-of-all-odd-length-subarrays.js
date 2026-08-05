/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let splits = arr.slice(i, j+1)
            if (splits.length % 2 !== 0) {
                sum += splits.reduce((acc, curr) => acc + curr, 0)
            }
        }
    }
    return sum
};