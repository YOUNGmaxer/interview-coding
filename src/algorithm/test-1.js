/**
 * 1. 给定一个字符串s，返回s所有回文子串。（回文串是正着读和反着读都一样的字符串。）

    输入: 'aa'
    输出: ['a', 'aa']

    输入: 'aabba'
    输出: [‘a’, ‘b’, ‘aa’, ‘bb’, ‘abba']

    测试用例：'aabbba', 'a', 'abbccc'
 */

function test(s) {
  const len = s.length
  const found = new Set()
  const result = []

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const sub = s.substring(i, j + 1)
      if (isHuiwen(sub)) {
        if (!found.has(sub)) {
          result.push(sub)
          found.add(sub)
        }
      }
    }
  }

  return result
}

function test_2(s) {
  const len = s.length
  const result = new Set()
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j]) {
        const sub = s.substring(i, j + 1)
        if (j - i <= 1 || dp[i+1][j-1]) {
          result.add(sub)
          dp[i][j] = true
        }
      }
    }
  }

  return Array.from(result)
}

function isHuiwen(str) {
  let start = 0, end = str.length - 1
  while (start <= end) {
    if (str[start++] !== str[end--]) return false
  }
  return true
}

console.log(test('aabba'))
console.log(test_2('aabba'))
console.log(test('aa'))
