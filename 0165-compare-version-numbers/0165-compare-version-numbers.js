/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map(num => parseInt(num, 10));
    let v2 = version2.split('.').map(num => parseInt(num, 10));
    
    let maxLen = Math.max(v1.length, v2.length);
    while (v1.length < maxLen) v1.push(0);
    while (v2.length < maxLen) v2.push(0);
    
    for (let i = 0; i < maxLen; i++) {
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }
    return 0;
};
