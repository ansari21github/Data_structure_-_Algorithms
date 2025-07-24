/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    // Brute force solution o(n2)

//   for(let i=0; i<=nums.length; i++){
// if(!nums.includes(i)){
//     return i;
// }
//   }  
//   return -1;

let n = nums.length;

let sum = n * (n+1) / 2;
let currentSum = nums.reduce((acc,crn)=>acc+crn,0)
return sum - currentSum ;
};