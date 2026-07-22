/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const suff = s.slice(0,k).split("").reverse().join('')
    const pref= s.slice(k)
    return suff+pref
};