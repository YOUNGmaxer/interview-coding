/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    const leftVal = nums[left], rightVal = nums[right]
    const sum = leftVal + rightVal
    if (sum === target) return [leftVal, rightVal]
    if (sum > target) right--
    else left++
  }
  return []
};
