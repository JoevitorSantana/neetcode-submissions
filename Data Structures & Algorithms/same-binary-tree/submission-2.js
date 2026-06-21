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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    dfs(root1, root2)
    {
        if (!root1 && !root2)
            return true
        if (root1 && root2 && root1.val === root2.val)
            return this.dfs(root1.left, root2.left) && this.dfs(root1.right, root2.right)
        return false
    }

    isSameTree(p, q) {
        return this.dfs(p, q)
    }
}
