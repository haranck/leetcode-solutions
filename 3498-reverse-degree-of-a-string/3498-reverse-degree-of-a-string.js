/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let res = 0
    for (let i = 1; i <= s.length; i++) {
        let code = s.toLowerCase().charCodeAt(i - 1)
        res += (27 - (code - 96)) * i
    }
    return res
};