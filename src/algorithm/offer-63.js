/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  const dp = [0, -prices[0]]

  for (let i = 1; i < len; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i])
    dp[1] = Math.max(dp[1], -prices[i])
  }

  return dp[0]
};

console.log(maxProfit([7,1,5,3,6,4]))
