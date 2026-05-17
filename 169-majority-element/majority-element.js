/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // More voting algorithm

    // let obj = {};
    // let n = nums.length
    // for(let key of nums){
    //     if(obj[key]){
    //         obj[key]++;
    //     }else{
    //         obj[key] = 1;
    //     }
    // }

    // for(let key in obj){
    //  if(obj[key] > (n/2)){
    //     return Number(key);
    //  }
    // }

let el;
let count = 0;

for(let i=0; i<nums.length; i++){
    if(count === 0){
        el = nums[i];
        count++;
    }else if(nums[i] === el){
        count++;
    }else if(nums[i] != el){
        count--;
    }
}
return el;
};