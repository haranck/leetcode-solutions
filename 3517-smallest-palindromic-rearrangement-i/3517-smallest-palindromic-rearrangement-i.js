/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
    let map = new Map()

    let left = ""
    let middle = ""

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let chars = [...map.keys()].sort()

    for (let char of chars) {
        let count = map.get(char)
        left += char.repeat(Math.floor(count / 2))
        if (count % 2 === 1) {
            middle += char
        }
    }
    let right = left.split('').reverse().join('')
    return left + middle + right
};