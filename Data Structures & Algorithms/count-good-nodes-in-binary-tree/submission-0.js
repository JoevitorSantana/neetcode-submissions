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

    dfs(root, maxVal)
    {
        if (!root) return 0
        let res = root.val >= maxVal ? 1 : 0
        maxVal = Math.max(root.val, maxVal)
        res += this.dfs(root.left, maxVal)
        res += this.dfs(root.right, maxVal)
        return res
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, root.val)
    }
}
