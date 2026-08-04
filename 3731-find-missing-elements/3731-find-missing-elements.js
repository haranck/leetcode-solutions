/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    let set = new Set(nums)
    let arr = []
    for (let i = min; i <= max; i++){
        if(!set.has(i)){
            arr.push(i)
        }
    }

    return arr
};



