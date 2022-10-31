/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sLen = s.length
  const tLen = t.length

  let sp = 0, tp = 0
  while (tp < tLen && sp < sLen) {
    if (s[sp] === t[tp]) {
      sp++
      tp++
    } else {
      tp++
    }
  }

  return sp === sLen
};

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
