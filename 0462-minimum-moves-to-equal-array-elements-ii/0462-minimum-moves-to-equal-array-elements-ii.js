/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);

    let mid = Math.floor(nums.length / 2);
    let median = nums[mid];

    let moves = 0;

    for (let num of nums) {
        moves += Math.abs(num - median);
    }

    return moves;
};