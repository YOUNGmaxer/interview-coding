/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  const len = astr.length
  const map = new Map()

  for (let i = 0; i < len; i++) {
    if (map.has(astr[i])) return false

    map.set(astr[i], true)
  }

  return true
};

console.log(isUnique('leetcode'))
console.log(isUnique('abc'))
