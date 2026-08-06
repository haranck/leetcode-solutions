/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {

    while (true) {
        let product = 1;
        let temp = n;

        while (temp > 0) {
            product *= temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (product % t === 0) {
            return n;
        }

        n++;
    }

};