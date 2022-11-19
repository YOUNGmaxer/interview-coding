/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let next = 1
  let cur = digits.length - 1

  while (next > 0 && cur >= 0) {
    const curRes = digits[cur] + next
    if (curRes > 9) {
      digits[cur] = 0
      next = 1
    } else {
      digits[cur] = curRes
      next = 0
    }
    cur--
  }

  if (next) digits.unshift(next)

  return digits
};

console.log(plusOne([1,2,3]))
