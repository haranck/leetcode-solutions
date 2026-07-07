/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let str = n.toString().split('')
    let x = 0
    let s = ''
    for (let num of str) {
        if (Number(num) !==0 ){
            x+=Number(num)
            s+=num
        }
    }
    return s*x
};