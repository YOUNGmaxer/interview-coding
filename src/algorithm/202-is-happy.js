/**
 * 202. 快乐数
 * @link https://leetcode.cn/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const record = new Map();

  while (true) {
    n = getSum(n);
    if (record.has(n)) return false;
    if (n === 1) return true;
    record.set(n, true);
  }
};

function getSum(n) {
  let sum = 0;

  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  
  return sum;
}

console.log(isHappy(19)); // true
