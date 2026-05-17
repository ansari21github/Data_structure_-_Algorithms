/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
   let map = new Map();

   for(let i=0; i<nums.length; i++){
    let a = nums[i];
    let more = target - a;

    if(map.has(more)){
        let j = map.get(more);
        return [j,i]
    }
    map.set(nums[i],i);
   }
};