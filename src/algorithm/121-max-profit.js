/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let low = Infinity;

  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    max = Math.max(prices[i] - low, max);
  }
  
  return max;
};

var maxProfitByDp = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => [0, 0]);

  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < len; i++) {
    // 注意，因为只能买入一次，所以当要买入时，就是 -prices[i]
    dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
  }

  return dp[len-1][1];
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfitByDp([7,1,5,3,6,4]));
