class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const shash = {};

        if (s.length != t.length) return false

        for (let c of s) {
            if(!shash[c]) {
                shash[c] = 1
            } else {
                shash[c] += 1
            }
        }

        console.log(shash)
        
        for (let c of t) {
            if (shash[c] && shash[c] > 0) {
                shash[c] -= 1
            } else {
                return false
            }
        }

        return true
    }
}
