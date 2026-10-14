/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    let ans = "";

    for (let i = 0; i < num; i++) {
        if (sum >= 9) {
            ans += "9";
            sum -= 9;
        } else {
            ans += sum;
            sum = 0;
        }
    }

    if (ans.length === num && sum > 0) return "";

    return ans;
};