/**
 * 151. 反转字符串中的单词
 * @link https://leetcode.cn/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const strArr = s.split('');
  const len = strArr.length;
  let deletedSpaceCount = 0;

  // 移除多余空格
  for (let slow = 0, fast = 0; fast < len; fast++) {
    const current = strArr[fast];
    if (slow === 0 && current === ' ') {
      deletedSpaceCount++;
      continue;
    };
    if (fast === len - 1 && current === ' ') {
      deletedSpaceCount++;
      continue;
    }
    if (fast > 0 && current === ' ' && strArr[fast+1] === ' ') {
      deletedSpaceCount++;
      continue;
    };

    strArr[slow++] = strArr[fast];
  }

  const newLen = len - deletedSpaceCount;

  // 翻转每个单词
  for (let left = 0, right = 0; right < newLen; right++) {
    if (strArr[right + 1] === ' ' || right === newLen - 1) {
      reverseWord(strArr, left, right);
      left = right + 2;
    }
  }

  // 翻转整个字符串
  reverseWord(strArr, 0, newLen - 1);

  return strArr.slice(0, newLen).join('');
};

function reverseWord(strArr, left, right) {
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

console.log(reverseWords(' the  sky is blue  '));
