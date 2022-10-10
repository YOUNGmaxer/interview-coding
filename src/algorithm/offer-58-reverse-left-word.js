/**
 * 剑指 Offer 58 - II. 左旋转字符串
 * @link https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  const strArr = s.split('');
  const len = strArr.length;

  reverseWord(strArr, 0, n - 1);
  reverseWord(strArr, n, len - 1);
  reverseWord(strArr, 0, len - 1);

  return strArr.join('');
};

function reverseWord(strArr, left, right) {
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

console.log(reverseLeftWords('abcdefg', 2));
