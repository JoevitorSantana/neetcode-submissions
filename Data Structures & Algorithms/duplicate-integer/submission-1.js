class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /* 
            Criar um Hashset
            Percorrer os itens verificando se estão no hashset,
             - Se achar encontra retorna true
             - Se não adiciona valor no hashset
        */
        const hashset = new Set();

        for(const num of nums) {
            if (hashset.has(num)) {
                return true;
            }
            hashset.add(num);
        }

        return false
    }
}
