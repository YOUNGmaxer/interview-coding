/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()

  const len = s.length
  let right = len - 1, left = right
  let result = ''
  while (left >= 0) {
    while (left >= 0 && s[left] !== ' ') left--
    result += ` ${s.substring(left + 1, right + 1)}`
    while (left >= 0 && s[left] === ' ') left--
    right = left
  }
  return result.trim()
};

console.log(reverseWords('the sky is blue'))
