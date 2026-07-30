/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    let splits = word.split('')
    let set = [...new Set(splits)]

    let obj = {}

    for (let i = 0; i < set.length; i++) {
        obj[set[i]] = Math.ceil((i+1)/8)
    }
    console.log(obj)
    let count = 0

    for(let char of word){
        count+= obj[char]
    }
    console.log(count)
    return count
};