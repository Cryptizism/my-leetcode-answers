/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0) return [init]
    var acc = init;
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
        var newAcc = fn(acc, nums[i])
        acc = newAcc
        newNums.push(newAcc)
    }
    return newAcc;
};