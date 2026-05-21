/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {

    let set = new Set();

    // store all prefixes from arr1
    for(let num of arr1){

        let str = num.toString();
        let prefix = "";

        for(let ch of str){
            prefix += ch;
            set.add(prefix);
        }
    }

    let maxLen = 0;

    // check prefixes in arr2
    for(let num of arr2){

        let str = num.toString();
        let prefix = "";

        for(let i = 0; i < str.length; i++){

            prefix += str[i];

            if(set.has(prefix)){
                maxLen = Math.max(maxLen, i + 1);
            }
        }
    }

    return maxLen;
};