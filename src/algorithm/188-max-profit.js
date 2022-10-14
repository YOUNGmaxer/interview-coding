/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const len = prices.length;
  const stateNum = 2 * k + 1;
  const dp = new Array(len).fill(0).map(() => new Array(stateNum).fill(0));

  for (let i = 1; i < stateNum; i+=2) {
    dp[0][i] = -prices[0];
  }

  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i-1][0]
    for (let j = 0; j < stateNum; j+=2) {
      dp[i][j+1] = Math.max(dp[i-1][j+1], dp[i-1][j] - prices[i])
      dp[i][j+2] = Math.max(dp[i-1][j+2], dp[i-1][j+1] + prices[i])
    }
  }

  return dp[len-1][stateNum-1]
};

console.log(maxProfit(2, [3,2,6,5,0,3]))
