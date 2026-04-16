class Solution {
    public int[] getConcatenation(int[] nums) {
            /* obter tamanho do array */
            /* criar array com dobro do tamanho */
            int[] concat = new int[nums.length * 2];

            for (int i = 0; i < nums.length; i++) {
                concat[i] = nums[i];
                concat[i+nums.length] = nums[i];
            }

            /* percorrer primeiro array */
            /* fazer duas inserções no array criado nas posições n +  */

            return concat;
    }
}