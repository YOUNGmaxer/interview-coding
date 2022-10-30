/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length
  let len2 = text2.length
  if (len1 < len2) {
    [len1, len2] = [len2, len1];
    [text1, text2] = [text2, text1];
  }
  const dp = new Array(len1).fill(0).map(() => new Array(len2).fill(0))
  
  dp[0][0] = text1[0] === text2[0] ? 1 : 0
  let max = dp[0][0]

  for (let i = 1; i < len1; i++) {
    dp[i][0] = text1[i] === text2[0] ? 1 : dp[i-1][0]
    max = Math.max(max, dp[i][0])
  }
  for (let j = 1; j < len2; j++) {
    dp[0][j] = text1[0] === text2[j] ? 1 : dp[0][j-1]
    max = Math.max(max, dp[0][j])
  }

  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = Math.max(dp[i-1][j-1] + 1, dp[i][j-1], dp[i-1][j])
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
      max = Math.max(max, dp[i][j])
    }
  }

  return max
};

longestCommonSubsequence('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
