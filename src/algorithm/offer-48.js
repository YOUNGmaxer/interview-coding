/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length
  let maxLen = 0
  let left = 0, right = 0
  const existed = new Set()

  while (left < len) {
    
    while (right < len && !existed.has(s[right])) {
      existed.add(s[right])
      right++
    }

    maxLen = Math.max(maxLen, right - left)
    existed.delete(s[left])
    left++
  }

  return maxLen
};

console.log(lengthOfLongestSubstring('abcabcbb'))
