/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let arr = new Array(nums.length);

    let positiveIndex = 0;
    let negativeIndex = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            arr[positiveIndex] = nums[i];
            positiveIndex += 2;
        } else {
            arr[negativeIndex] = nums[i];
            negativeIndex += 2;
        }
    }

    return arr;
};