/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let setA = new Set()
    let setB = new Set()
    let result = []

    for (let i = 0; i < A.length; i++) {
        setA.add(A[i])
        setB.add(B[i])

        let count = 0
        for (let num of setA) {
            if (setB.has(num)) {
                count++
            }
        }
        result.push(count)
    }
    return result
};