/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const prefixGcd = [];
    let mx = 0;

    for (const num of nums) {
        mx = Math.max(mx, num);
        prefixGcd.push(gcd(num, mx));
    }

    prefixGcd.sort((a, b) => a - b);

    let ans = 0;
    let left = 0;
    let right = prefixGcd.length - 1;

    while (left < right) {
        ans += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return ans;
};

function gcd(a, b) {
    while (b !== 0) {
        let t = a % b;
        a = b;
        b = t;
    }
    return a;
}