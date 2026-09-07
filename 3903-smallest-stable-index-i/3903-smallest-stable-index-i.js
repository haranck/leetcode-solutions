/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var firstStableIndex = function(nums, k) {

    for (let i = 1; i <= nums.length; i++) {

        let first = nums.slice(0, i);
        let second = nums.slice(i - 1, nums.length);

        let max = Math.max(...first);
        let min = Math.min(...second);

        if (max - min <= k) {
            return i - 1;
        }
    }

    return -1;
};