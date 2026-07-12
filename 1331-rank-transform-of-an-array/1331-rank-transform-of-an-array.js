/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let newarr = []
    let uniq  = [...arr].sort((a,b)=>a-b)
    console.log('uniq ',uniq)
    let sort = [...new Set(uniq)]
    console.log('sort ',sort)
    let obj  = {}
    for(let i =0;i<sort.length;i++){
        obj[sort[i]] = i + 1;
    }
    console.log(obj)
    for(let i = 0 ;i<arr.length;i++){
        newarr.push(obj[arr[i]])
    }
    console.log(newarr)
    return newarr
    
};
