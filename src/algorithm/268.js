/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let mask = 0

  for (const n of nums) {
    mask ^= n
  }

  for (let i = 1; i <= nums.length; i++) {
    mask ^= i
  }

  return mask
};

console.log(missingNumber([0,1]))
