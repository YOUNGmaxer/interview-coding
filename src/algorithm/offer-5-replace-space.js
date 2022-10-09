/**
 * 剑指 Offer 05. 替换空格
 * @link https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  const strArr = Array.from(s);
  const len = strArr.length;
  let spaceCount = 0;

  for (let i = 0; i < len; i++) {
    if (strArr[i] === ' ') spaceCount++;
  }

  let oldPoint = len - 1;
  let newPoint = len + spaceCount * 2 - 1;

  while (oldPoint >= 0) {
    if (strArr[oldPoint] === ' ') {
      strArr[newPoint--] = '0';
      strArr[newPoint--] = '2';
      strArr[newPoint--] = '%';
    } else {
      strArr[newPoint--] = strArr[oldPoint];
    }
    oldPoint--;
  }

  return strArr.join('');
};

console.log(replaceSpace('hello world'));
