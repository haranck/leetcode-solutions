/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let res = Number(String(n).split('').reverse().join(""))
    return Math.abs(n-res)
};