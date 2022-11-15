/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let mask = 0

  for (const num of nums) {
    mask ^= num
  }

  return mask
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([2,2,-1]))
