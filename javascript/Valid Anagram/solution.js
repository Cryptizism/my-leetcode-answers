/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sArr = s.split("");
    tArr = t.split("");

    return sArr.sort().toString() === tArr.sort().toString()
};