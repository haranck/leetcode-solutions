/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let count  = 0
    function Sum(root) {
        if (!root) return 0
        return Sum(root.left) + Sum(root.right) + root.val
    }
    function countNodes(root){
        if(!root) return 0
        return countNodes(root.left) + countNodes(root.right) +1 
    }
    function inOrder(root){
        if(root){
            inOrder(root.left)
            
            let sum = Sum(root)
            let nodes = countNodes(root)
            let avg = Math.floor(sum/nodes)

            if(avg === root.val){
                count++
            }
            inOrder(root.right)
        }
    }
    inOrder(root)

    console.log(Sum(root))
    console.log(countNodes(root))
    console.log(count)
    return count
};