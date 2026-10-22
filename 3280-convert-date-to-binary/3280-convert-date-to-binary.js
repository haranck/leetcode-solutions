/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let result = ""
    let arr = date.split("-")
    for (let i = 0; i < arr.length; i++) {
        let binary = Number(arr[i]).toString(2)
        result += binary+"-"
    }
    return result.slice(0,-1)
};