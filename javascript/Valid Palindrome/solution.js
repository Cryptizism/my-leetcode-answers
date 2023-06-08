/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
    return newStr === newStr.split("").reverse().join("")
};