/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let start = 1, digit = 1, count = 9

  while (n > count) {
    n -= count
    start *= 10
    digit += 1
    count = digit * start * 9
  }

  const target = start + Math.floor((n - 1) / digit)
  return String(target).charAt((n - 1) % digit)
};

console.log(findNthDigit(500))
console.log(findNthDigit(2))
console.log(findNthDigit(3))
console.log(findNthDigit(10))
console.log(findNthDigit(11))
