/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, Math.max(dp[j], j) * Math.max(dp[i-j], i-j));
    }
    dp[i] = max;
  }

  return dp[n];
};

console.log(integerBreak(10));
