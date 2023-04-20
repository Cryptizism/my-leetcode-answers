/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length;
    for(let p = 0; p < Math.floor(l/2); p++){
        let t = s[p];
        s[p] = s[l-1-p];
        s[l-1-p] = t;
    }
};