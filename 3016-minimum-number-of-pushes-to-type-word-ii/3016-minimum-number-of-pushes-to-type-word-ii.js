/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    let obj = {};

    for (let ch of word) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    let freq = Object.values(obj);

    freq.sort((a, b) => b - a);
    console.log(freq)

    let ans = 0;

    for (let i = 0; i < freq.length; i++) {
        ans += freq[i] * (Math.floor(i / 8) + 1);
    }

    return ans;
};