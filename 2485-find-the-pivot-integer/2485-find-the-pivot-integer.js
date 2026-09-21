var pivotInteger = function(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let left = 0;

    for (let i = 1; i <= n; i++) {
        left += i;

        let right = sum - left + i;

        if (left === right) {
            return i;
        }
    }
    console.log(left)
    return -1;
};