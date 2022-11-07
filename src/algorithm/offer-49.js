/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let a = 0, b = 0, c = 0
  let dp = new Array(n).fill(0)
  dp[0] = 1

  for (let i = 1; i < n; i++) {
    na = dp[a] * 2
    nb = dp[b] * 3
    nc = dp[c] * 5
    dp[i] = Math.min(na, nb, nc)

    if (dp[i] === na) a++
    if (dp[i] === nb) b++
    if (dp[i] === nc) c++
  }

  return dp[n-1]
};

console.log(nthUglyNumber(10))
