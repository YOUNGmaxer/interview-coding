/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const exist = new Map()
  const len = s.length

  for (let i = 0; i < len; i++) {
    exist.set(s[i], (exist.get(s[i]) || 0) + 1)
  }

  for (let i = 0; i < len; i++) {
    if (exist.get(s[i]) === 1) return i
  }

  return -1
};

console.log(firstUniqChar('loveleetcode'))
