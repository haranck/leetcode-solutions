/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let count = 0
    let length = word.length
    let i = 1
    while (length > 0) {
        if (length >= 8) {
            count += i*8
        }else{
            count+=length*i
        }
        length-=8
        i++
    }
    return count

};