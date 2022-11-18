/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const len = s.length
  const dict = new Set(wordDict)
  const dp = new Array(len + 1).fill(false)
  dp[0] = true
  
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const subfix = s.slice(j, i)
      if (dict.has(subfix) && dp[j]) {
        dp[i] = true
        break;
      }
    }
  }

  return dp[len]
};
