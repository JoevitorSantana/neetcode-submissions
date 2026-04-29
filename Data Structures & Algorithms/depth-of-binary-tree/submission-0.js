/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    expandDepth(root) {
        if (!root) return 0
        let maxLeft = this.expandDepth(root.left) + 1
        let maxRight = this.expandDepth(root.right) + 1
        if (maxLeft > maxRight) return maxLeft
        else return maxRight
    }

    maxDepth(root) {
        if (!root) return 0

        let max = this.expandDepth(root)

        // console.log(max)

        return max
    }
}
