/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => [0,0,0,0,0]);

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  dp[0][3] = -prices[0];
  dp[0][4] = 0;
  
  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i-1][0]
    dp[i][1] = Math.max(dp[i-1][0] - prices[i], dp[i-1][1])
    dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i])
    dp[i][3] = Math.max(dp[i-1][2] - prices[i], dp[i-1][3])
    dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i])
  }

  return Math.max(dp[len-1][2], dp[len-1][4]);
};

console.log(maxProfit([3,3,5,0,0,3,1,4]))
