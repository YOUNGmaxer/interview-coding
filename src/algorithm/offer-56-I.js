/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let mask = 0
  let x = 0
  let y = 0
  let m = 1

  for (const num of nums) {
    mask ^= num
  }

  while ((mask & m) === 0) m <<= 1

  for (const num of nums) {
    if (num & m) x ^= num
    else y ^= num
  }

  return [x, y]
};

console.log(singleNumbers([4,1,4,6]))
console.log(singleNumbers([65,1,65,6]))
console.log(singleNumbers([1,2,5,2]))
