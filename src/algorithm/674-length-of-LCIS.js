/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const len = nums.length
  if (len < 2) return len

  const dp = new Array(len).fill(1)
  let maxLength = 1

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) {
      dp[i] = dp[i-1] + 1
      maxLength = Math.max(maxLength, dp[i])
    }
  }

  return maxLength
};

findLengthOfLCIS([1,3,5,4,7])
findLengthOfLCIS([2,2,2,2,2])
