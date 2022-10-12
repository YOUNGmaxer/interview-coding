/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  const half = sum / 2;
  const weight = Math.ceil(half);
  const len = nums.length;
  if (weight > half) return false;

  const dp = new Array(len).fill(0).map(() => new Array(weight + 1).fill(0));

  for (let j = 0; j <= weight; j++) {
    if (j >= nums[0]) {
      dp[0][j] = nums[0];
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= weight; j++) {
      if (j < nums[i]) dp[i][j] = dp[i-1][j];
      else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-nums[i]] + nums[i]);
    }
  }

  return dp[len-1][weight] === weight;
};

console.log(canPartition([1,2,5]));
console.log(canPartition([1,5,11,5]));
