/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let set = new Set(dictionary)
    let words = sentence.split(' ')

    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j <= words[i].length; j++) {
            const word = words[i].slice(0, j)
            if (set.has(word)) {
                words[i] = word
                break
            }
        }
    }
    return words.join(" ")
};