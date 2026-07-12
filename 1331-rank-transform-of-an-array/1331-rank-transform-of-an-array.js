/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {

    let newarr = []
    let uniq  = [...arr].sort((a,b)=>a-b)
    let sort = [...new Set(uniq)]
    let obj  = {}
    for(let i =0;i<sort.length;i++){
        obj[sort[i]] = i + 1;
    }
    for(let i = 0 ;i<arr.length;i++){
        newarr.push(obj[arr[i]])
    }
    return newarr
    
};
