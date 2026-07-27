/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = 0
    nums.sort((a, b) => b - a)
    let product = (nums[0] - 1) * (nums[1] - 1)
    return Math.max(max, product)
}; 