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
    res = 0

    dfs(curr) {
        if (!curr)
            return 0
        
        let left = this.dfs(curr.left)
        let right = this.dfs(curr.right)

        this.res = Math.max(this.res, left + right)
        return 1 + Math.max(left, right)
    }

    diameterOfBinaryTree(root) {
        this.dfs(root)
        return this.res
    }
}
