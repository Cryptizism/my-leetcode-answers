/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const index = nums1.length + nums2.length;
    let combArr = [];
    let numsPointer = [0, 0];
    for (let i = 0; i < index; i++) {
        if (numsPointer[0] === nums1.length) {
            combArr[i] = nums2[numsPointer[1]];
            numsPointer[1]++;
        } else if (numsPointer[1] === nums2.length) {
            combArr[i] = nums1[numsPointer[0]];
            numsPointer[0]++;
        } else if (nums1[numsPointer[0]] < nums2[numsPointer[1]]) {
            combArr[i] = nums1[numsPointer[0]];
            numsPointer[0]++;
        } else {
            combArr[i] = nums2[numsPointer[1]];
            numsPointer[1]++;
        }
    }
    if (combArr.length % 2 === 0) {
        const mid = combArr.length / 2;
        return (combArr[mid] + combArr[mid - 1]) / 2;
    } else {
        const mid = Math.floor(combArr.length / 2);
        return combArr[mid];
    }
};