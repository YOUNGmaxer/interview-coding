/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length

  const dp = new Array(len1).fill(0).map(() => new Array(len2).fill(0))
  let max = 0
  for (let i = 0; i < len1; i++) {
    dp[i][0] = nums1[i] === nums2[0] ? 1 : 0
    max = Math.max(max, dp[i][0])
  }
  for (let j = 0; j < len2; j++) {
    dp[0][j] = nums1[0] === nums2[j] ? 1 : 0
    max = Math.max(max, dp[0][j])
  }

  for (let i = 1; i < len1; i++) {
    for (let j = 1;j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i-1][j-1] + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max
};

findLength([1,2,3,2,1], [3,2,1,4,7])
