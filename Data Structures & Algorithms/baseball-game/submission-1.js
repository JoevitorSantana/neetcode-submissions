class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        let totalSum = 0
        let last
        let antecessor
        let val;

        for(let i = 0; i < operations.length; i++) {
            let el = operations[i]
            switch(el) {
                case '+':
                    last = stack.pop()
                    antecessor = stack.pop()
                    stack.push(antecessor)
                    stack.push(last)
                    stack.push(last + antecessor)
                    break
                case 'D':
                    last = stack[stack.length-1]
                    stack.push(last*2)
                    break
                case 'C':
                    last = stack.pop()
                    break
                default:
                    val = parseInt(el)
                    stack.push(val)
                    break
            }
        }

        while(stack.length > 0) {
            totalSum += stack.pop()
        }

        return totalSum
    }
}
