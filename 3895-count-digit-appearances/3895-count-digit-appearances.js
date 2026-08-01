/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let num = ""
    let count= 0
    for(let n of nums){
        num+=n
    }
    for(let char of num){
        if(Number(char)===digit){
            count++
        }
    }
    return count
};