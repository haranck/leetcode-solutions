/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let length = dimensions.length
    let max = 0
    let sum = 0
    function square(arr){
        return arr.reduce((acc,curr)=>acc + curr*curr,0)
    }
    for(let i = 0 ;i<length;i++){
        let first = square(dimensions[i])
        if(first>max){
            sum = dimensions[i][0]*dimensions[i][1]
            max = first
        }else if(first===max){
            sum = Math.max(sum,dimensions[i][0]*dimensions[i][1])
        }
    }
    console.log(max)
    console.log(sum)
    return sum
};