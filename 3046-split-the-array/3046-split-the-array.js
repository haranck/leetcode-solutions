/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    let freq = {}
    let nums1 = []
    let nums2 = []
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    for (let num in freq) {
        if (freq[num]>2){
            return false
        }
   }
   return true
};