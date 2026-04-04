/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // brutfoce is there
    // optimal solution
    let j = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            j = i;
            break;
        }
    }

    if(j == -1) return nums;

    for(let i = j+1; i<nums.length; i++){
        if(nums[i] != 0){
            let temp = nums[j];
            nums[j] = nums[i]
            nums[i] = temp;
            j++;
        }
    }
    return nums;
};