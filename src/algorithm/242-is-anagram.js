/**
 * 242. 有效的字母异位词
 * @link https://leetcode.cn/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const record = new Array(26).fill(0);
  const base = 'a'.charCodeAt();

  for (let i = 0; i < s.length; i++) {
    record[s[i].charCodeAt() - base]++;
    record[t[i].charCodeAt() - base]--;
  }

  for (let i = 0; i < record.length; i++) {
    if (record[i] !== 0) return false;
  }

  return true;
};

console.log(isAnagram('a', 'ab')); // false
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
