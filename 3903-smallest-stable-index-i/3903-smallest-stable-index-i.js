/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
let arr = []
let index = 0
    for (let i = 1; i <= nums.length; i++) {
        let first = nums.slice(0, i)
        let second = nums.slice(i - 1, nums.length)
        let max = Math.max(...first)
        let min = Math.min(...second)
        arr.push((max-min))
        if((max - min) <= k){
            index = (max-min)
            break
        }
    }
    return arr.indexOf(index)
};