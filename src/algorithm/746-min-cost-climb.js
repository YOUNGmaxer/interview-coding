/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  const n = cost.length;

  dp[0] = 0;
  dp[1] = Math.min(cost[0], 0);
  dp[2] = Math.min(cost[0], cost[1]);

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
  }

  return dp[n];
};

console.log(minCostClimbingStairs([10,15,20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
