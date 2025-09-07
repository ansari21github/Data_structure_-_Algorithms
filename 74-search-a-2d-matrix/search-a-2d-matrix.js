/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // for(let i=0; i<matrix.length; i++){
    //     if(matrix[i].includes(target)){
    //         return true;
    //     }
    // }
    // return false;

    //  O(m × n) 

    // Optimal solution

    let m = matrix.length; 
    let n = matrix[0].length;
    
   let row = 0;
   let col = n-1;

   while(row < m && col>=0){

    if(matrix[row][col] === target)return true;
    else if(matrix[row][col] > target) col--;
    else row++;
   }
   return false;

//    Time Complexity: O(m + n)
// Space Complexity: O(1)
};