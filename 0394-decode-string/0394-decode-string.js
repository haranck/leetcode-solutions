/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentString = "";
    let number = 0;

    for (let char of s) {

        if (!isNaN(char)) {
            number = number * 10 + Number(char);

        } else if (char === "[") {
            stack.push([currentString, number]);

            currentString = "";
            number = 0;

        } else if (char === "]") {
            let [previousString, repeat] = stack.pop();

            currentString = previousString + currentString.repeat(repeat);

        } else {
            currentString += char;
        }
    }

    return currentString;
};







