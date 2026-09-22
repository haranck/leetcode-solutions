/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let set = new Set();
    let repeated = 0;
    let missing = 0;

    for (let row of grid) {
        for (let num of row) {
            if (set.has(num)) {
                repeated = num;
            }
            set.add(num);
        }
    }

    let n = grid.length * grid.length;

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            missing = i;
        }
    }

    return [repeated, missing];
};