class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validClosing(opening, closing) {
        if (opening == '[' && closing == ']') return true
        if (opening == '(' && closing == ')') return true
        if (opening == '{' && closing == '}') return true
        return false
    }

    isEven(num)
    {
        return num % 2 === 0
    }

    isValid(s) {
        let opening = ["[", "(", "{"]
        let closing = ["]", ")", "}"]
        let stack = []

        if (!this.isEven(s.length)) return false

        for(let c of s) {
            if (opening.includes(c))
                stack.push(c)
            if (closing.includes(c)) {
                if (!this.validClosing(stack.pop(), c))
                    return false
            }
        }

        return stack.length === 0
    }
}
