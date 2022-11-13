/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let cur = nums[0], count = 1

  for (let i = 1; i < nums.length; i++) {
    if (cur === nums[i]) count++
    else {
      count--
      if (count === 0) {
        cur = nums[i]
        count = 1
      }
    }
  }
  return cur
};

console.log(majorityElement([3,2,3]))
