/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return s[i]
  }

  return ' '
};

console.log(firstUniqChar('abaccdeff'))
console.log(firstUniqChar('abba'))
