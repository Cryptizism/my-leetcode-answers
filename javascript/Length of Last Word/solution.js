/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.match(/\w+(?=\W*$)/)[0].length
};