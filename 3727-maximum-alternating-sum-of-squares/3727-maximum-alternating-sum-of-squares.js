/**
 * @param {number[]} nums
 * @return {number}
 */

var maxAlternatingSum = function(nums) {
    nums = nums.map(n => n * n);
    nums.sort((a, b) => a - b);

    let mid = Math.floor(nums.length / 2);
    let sum = 0;

    for (let i = 0; i < mid; i++) {
        sum -= nums[i];
    }

    for (let i = mid; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
};
