/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
  let result = 0

  for (let i = len-1; i >=0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          result++
          dp[i][j] = true
        } else if (dp[i+1][j-1]) {
          result++
          dp[i][j] = true
        }
      }
    }
  }

  return result
};

console.log(countSubstrings('abc'))
