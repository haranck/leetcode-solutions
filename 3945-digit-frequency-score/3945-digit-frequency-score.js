/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
    let numbers = String(n)
    let freq = {}
    let res = 0
    for (let numb of numbers) {
        freq[numb] = (freq[numb] || 0) + 1
    }
    for(let num in freq){
        res+= Number(num) * freq[num]
    } 
    return res
};