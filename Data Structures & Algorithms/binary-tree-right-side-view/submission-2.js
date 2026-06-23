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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []
        let queue = []
        queue.push(root)

        while (queue.length > 0)
        {
            let size = queue.length
            let rightSide = null

            for (let i = 0; i < size; i++) {
                let node = queue.shift()

                if (node)
                {
                    rightSide = node.val
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }

            if(rightSide)
                res.push(rightSide)
        }

        return res
    }
}
