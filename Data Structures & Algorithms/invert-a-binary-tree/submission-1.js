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
     * @return {TreeNode}
     */
    posOrder(root) {
        if (root == null) return
        this.posOrder(root.left)
        this.posOrder(root.right)
        let tmp = root.left
        root.left = root.right
        root.right = tmp
    }

    invertTree(root) {
        if (!root) return root
        if (!root.left && !root.right) return root
        

        this.posOrder(root)

        console.log(root)

        return root
    }
}
