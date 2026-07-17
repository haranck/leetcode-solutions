/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let ans = [];

    for (let row of matrix) {
        let degree = 0;

        for (let x of row) {
            degree += x;
        }

        ans.push(degree);
    }

    return ans;
};