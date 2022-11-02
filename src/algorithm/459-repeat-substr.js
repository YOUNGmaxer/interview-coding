/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const str = `${s}${s}`.slice(1, -1)
  return str.includes(s)
};

console.log(repeatedSubstringPattern('a'))
console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
console.log(repeatedSubstringPattern('ababab'))
console.log(repeatedSubstringPattern('abac'))
