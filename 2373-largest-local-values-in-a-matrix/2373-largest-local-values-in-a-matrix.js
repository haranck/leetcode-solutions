/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var largestLocal = function(grid) {
    let n = grid.length;
    let result = [];

    for (let i = 0; i < n - 2; i++) {
        let row = [];

        for (let j = 0; j < n - 2; j++) {
            let max = 0;

            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    max = Math.max(max, grid[x][y]);
                }
            }

            row.push(max);
        }

        result.push(row);
    }

    return result;
};
