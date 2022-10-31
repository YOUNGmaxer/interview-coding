/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  let maxMatch = 0
  const dp = new Array(len1+1).fill(0).map(() => new Array(len2+1).fill(0))

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
      maxMatch = Math.max(maxMatch, dp[i][j])
    }
  }

  return len1 + len2 - 2 * maxMatch
};

console.log(minDistance('sea', 'eat'))
console.log(minDistance('leetcode', 'etco'))
console.log(minDistance('a', 'b'))
