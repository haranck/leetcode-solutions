/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    console.log(k)
    let moved = nums.splice(-k)
    nums.unshift(...moved)
    console.log(nums)
};