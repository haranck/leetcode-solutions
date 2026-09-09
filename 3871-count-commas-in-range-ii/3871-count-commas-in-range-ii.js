/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count = 0;

    let place = 1000;

    while (place <= n) {
        count += n - place + 1;
        place *= 1000;
    }

    return count;
};