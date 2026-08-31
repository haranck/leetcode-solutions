/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let positions = [];
    let pos = 1;

    let prev = head;
    let curr = head.next;

    while (curr.next) {
        let next = curr.next;

        if (
            (curr.val > prev.val && curr.val > next.val) ||
            (curr.val < prev.val && curr.val < next.val)
        ) {
            positions.push(pos);
        }

        prev = curr;
        curr = next;
        pos++;
    }

    if (positions.length < 2) {
        return [-1, -1];
    }
    let min = Infinity;

    for (let i = 1; i < positions.length; i++) {
        min = Math.min(min, positions[i] - positions[i - 1]);
    }

    let max = positions[positions.length - 1] - positions[0];

    return [min, max];
};