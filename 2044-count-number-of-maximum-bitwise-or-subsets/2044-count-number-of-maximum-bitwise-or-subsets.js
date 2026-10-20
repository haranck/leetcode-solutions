/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    let max = 0;

    for (let num of nums) {
        max |= num;
    }

    let count = 0;

    function solve(i, or) {
        if (i === nums.length) {
            if (or === max) count++;
            return;
        }

        solve(i + 1, or | nums[i]);
        solve(i + 1, or);
    }

    solve(0, 0);
    return count;
};