/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let obj = {};

    for (let i = 0; i <= nums.length - k; i++) {
        let set = new Set();

        for (let j = i; j < i + k; j++) {
            set.add(nums[j]);
        }

        for (let num of set) {
            obj[num] = (obj[num] || 0) + 1;
        }
    }

    let ans = -1;

    for (let num in obj) {
        if (obj[num] === 1) {
            ans = Math.max(ans, Number(num));
        }
    }

    return ans;
};
