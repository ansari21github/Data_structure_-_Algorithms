/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = prices[0];
    let max = 0;
    let n = prices.length;

    for(let i=1; i<n; i++){
        let cost = prices[i] - mini;
        max = Math.max(max , cost);
        mini = Math.min(mini,prices[i]); 
    }
    return max;
    // dp becoz remambring the past.
};