/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const len = stones.length;
  let sum = 0;
  for (let i = 0; i < len; i++) sum += stones[i];
  const target = Math.floor(sum / 2);

  const dp = new Array(len).fill(0).map(() => new Array(target + 1).fill(0));
  for (let j = 0; j <= target; j++) {
    if (j >= stones[0]) dp[0][j] = stones[0];
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= target; j++) {
      if (j < stones[i]) dp[i][j] = dp[i-1][j];
      else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-stones[i]] + stones[i]);
    }
  }

  return sum - dp[len-1][target] * 2;
};

console.log(lastStoneWeightII([1,2]));
console.log(lastStoneWeightII([2,7,4,1,8,1]));
