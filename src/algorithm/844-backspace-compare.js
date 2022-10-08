/**
 * 844. 比较含退格的字符串
 * @description 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * @link https://leetcode.cn/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sPoint = s.length - 1;
  let tPoint = t.length - 1;
  let sBack = 0;
  let tBack = 0;

  while (sPoint >= 0 || tPoint >= 0) {
    while (sPoint >= 0 && (sBack > 0 || s[sPoint] === '#')) {
      if (s[sPoint] === '#') {
        sBack++;
        sPoint--;
      } else if (sBack > 0) {
        sBack--;
        sPoint--;
      }
    }
    while (tPoint >= 0 && (tBack > 0 || t[tPoint] === '#')) {
      if (t[tPoint] === '#') {
        tBack++;
        tPoint--;
      } else if (tBack > 0) {
        tBack--;
        tPoint--;
      }
    }

    if (s[sPoint] !== t[tPoint]) return false;

    sPoint--;
    tPoint--;
  }

  return true;
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'a#d#')); // true
console.log(backspaceCompare('a#c', 'b')); // false
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); // true
