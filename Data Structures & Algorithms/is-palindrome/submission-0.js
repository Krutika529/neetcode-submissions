class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let compareString = s.split('').reverse().join('');
        let string = s;
        if(compareString === string) {
            return true;
        }
        return false;
    }
}

