/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    function solve(length, start) {
        if (length === 0) return 1;

        let count = 0;

        for (let i = start; i < 5; i++) {
            count += solve(length - 1, i);
        }

        return count;
    }

    return solve(n, 0);
};