/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const splits = title.toLowerCase().split(" ")
    let res = ""
    for (let word of splits) {
        if (word.length > 2) {
            res += word[0].toUpperCase() + word.slice(1) + " "
        } else {
            res += word + " "
        }
    }
    return res.trim()
};