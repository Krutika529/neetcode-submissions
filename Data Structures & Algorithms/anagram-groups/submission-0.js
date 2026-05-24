class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (let s of strs) {
            const sortedKey = s.split('').sort().join('');
            if(map[sortedKey]) {
                map[sortedKey].push(s);
            } else {
                map[sortedKey] = [s];
            }
        }
        return Object.values(map);
    }
}
