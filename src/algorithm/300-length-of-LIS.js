/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len < 2) return len

  const dp = new Array(len).fill(1)
  let max = 1

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }

  return max
};

function lengthOfLIS_2(nums) {
  const len = nums.length
  const dp = new Array(len).fill(1)
  let max = 1

  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(dp[i], max)
  }

  return max
}

lengthOfLIS([4,10,4,3,8,9])
