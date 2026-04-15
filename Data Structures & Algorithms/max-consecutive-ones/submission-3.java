class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxSequence = 0, cont = 0;
        for (int num : nums) {
            if (num == 0) {
                maxSequence = Math.max(maxSequence, cont);
                cont = 0;
            } else {
                cont++;
            }
        }
        
        return Math.max(maxSequence, cont);
    }
}