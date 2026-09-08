/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (i >= 1000) {
            // return 0
            count++
        } 
    }
    console.log(count)
    return count
};