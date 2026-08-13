/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let ans = [""];

    for (let i = 0; i < n; i++) {
        let next = [];

        for (let str of ans) {
            next.push(str + "1");

            if (str.length === 0 || str[str.length - 1] === "1") {
                next.push(str + "0");
            }
        }

        ans = next;
    }

    return ans;
};