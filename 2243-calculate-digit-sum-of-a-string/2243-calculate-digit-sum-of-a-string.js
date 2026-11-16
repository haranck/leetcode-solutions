/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var digitSum = function(s, k) {
    while (s.length > k) {
        let sum = "";

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let total = 0;

            for (let digit of group) {
                total += Number(digit);
            }

            sum += total;
        }

        s = sum;
    }

    return s;
};
