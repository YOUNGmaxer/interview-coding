/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0, right = s.length - 1

  while (left <= right) {
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left++
      continue
    }
    if (!/[a-zA-Z0-9]/.test(s[right])) {
      right--
      continue
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

    left++
    right--
  }

  return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('Ab_a'))
