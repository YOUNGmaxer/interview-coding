/**
 * 给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，s 可能同时含有大写和小写字母。如果 a 和 b 相似，返回 true ；否则，返回 false 。
 */

function checkIsSimilar(s) {
  const half = s.length / 2
  const [a, b] = [s.slice(0, half), s.slice(half)]

  const charMap = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A': true,
    'E': true,
    'I': true,
    'O': true,
    'U': true
  }

  let count = 0

  for (let i = 0; i < half; i++) {
    if (charMap[a[i]]) count++
    if (charMap[b[i]]) count--
  }

  return count === 0
}

console.log(checkIsSimilar('aeiOeq'))
