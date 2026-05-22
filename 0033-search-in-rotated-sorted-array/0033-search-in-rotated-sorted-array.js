/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let num of nums) {
        if(num === target){
            return nums.indexOf(num)
        }
    }
    return -1
};  