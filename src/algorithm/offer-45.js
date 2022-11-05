/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums.sort((a, b) => Number(`${a}${b}`) - Number(`${b}${a}`))

  return nums.join('')
};

console.log(minNumber([3,30,34,5,9]))
