/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(), i = 0, max = 0;

    for (let r=0; r < s.length; r++) {
        while (set.has(s[r])){
            set.delete(s[i++]);

        }
        set.add(s[r]);
        max = Math.max(max,r - i + 1)

    }
    return max
};