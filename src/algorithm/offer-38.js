/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const len = s.length
  const result = []
  const used = new Map()
  const counter = new Map()

  for (let i = 0; i < len; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1)
  }

  function backtracking(path) {
    if (path.length === len) {
      result.push(path)
      return
    }

    const innerUsed = new Map()

    for (let i = 0; i < len; i++) {
      const char = s[i]
      if (used.get(char) === counter.get(char)) continue
      if (innerUsed.has(char)) continue
      path += char
      innerUsed.set(char, true)
      used.set(char, (used.get(char) || 0) + 1)
      backtracking(path)
      path = path.substr(0, path.length-1)
      used.set(char, used.get(char) - 1)
    }
  }

  backtracking('')

  return result
};

console.log(permutation('abc'))
console.log(permutation('aab'))
console.log(permutation('zg'))
