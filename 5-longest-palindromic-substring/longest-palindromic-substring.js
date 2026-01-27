var longestPalindrome = function(s) {
    let res = "";

    for (let i = 0; i < s.length; i++) {

        // odd length
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l, r + 1);
            }
            l--;
            r++;
        }

        // even length (ALAG block)
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return res;
};
