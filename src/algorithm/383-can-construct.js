/**
 * 383. 赎金信
 * @link https://leetcode.cn/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const record = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    record.set(letter, (record.get(letter) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (!record.get(letter)) return false;
    record.set(letter, record.get(letter) - 1);
  }

  return true;
};

console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aac', 'aca'));
