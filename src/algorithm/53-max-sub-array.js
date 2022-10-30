/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }

  return max;
};

var maxSubArray_2 = function(nums) {
  const len = nums.length
  const dp = new Array(len).fill(0)
  dp[0] = nums[0]
  let result = dp[0]

  for (let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
      result = Math.max(result, dp[i])
  }

  return result
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
