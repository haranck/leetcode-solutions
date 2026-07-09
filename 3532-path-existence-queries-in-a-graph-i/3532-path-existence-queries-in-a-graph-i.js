/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    let component = new Array(n);
    let group = 0;

    component[0] = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            group++;
        }
        component[i] = group;
    }

    let ans = [];

    for (let [u, v] of queries) {
        ans.push(component[u] === component[v]);
    }
    return ans;
};