/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    reverseList(head) {
        let headAux = null, cur

        while (head) 
        {
            cur = {...head}
            if (headAux) {
                cur.next = headAux
                headAux = cur
            } else {
                cur.next = null
                headAux = cur
            }
            head = head.next
        }

        return headAux
    }
}
