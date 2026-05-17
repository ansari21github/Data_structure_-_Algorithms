/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let n = nums.length
    for(let key of nums){
        if(obj[key]){
            obj[key]++;
        }else{
            obj[key] = 1;
        }
    }

    for(let key in obj){
     if(obj[key] > (n/2)){
        return Number(key);
     }
    }
};