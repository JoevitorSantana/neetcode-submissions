class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int sequence, maxSequence = 0;
        for (int i = 0; i < nums.length; i++) {
            sequence = 0;
            for (int j = i; j < nums.length && nums[j] == 1 ; j++, i++, sequence++);
            maxSequence = sequence > maxSequence ? sequence : maxSequence;
        }

        return maxSequence;
    }
}