/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};

var maxProfitByDp = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => [0, 0]);

  dp[0][0] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
  }

  return dp[len-1][1];
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfitByDp([7,1,5,3,6,4]));
