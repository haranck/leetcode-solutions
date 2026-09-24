/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = String(nums[i]).split('').reduce((acc, curr) => Number(curr) + acc, 0)
        if (sum === i) {
            return i
        }
    }
    return -1
};