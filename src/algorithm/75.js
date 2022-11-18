/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n0 = 0, n1 = 0, n2 = 0

  for (const n of nums) {
    if (n === 0) n0++
    else if (n === 1) n1++
    else if (n === 2) n2++
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < n0) nums[i] = 0
    else if (i < n0 + n1) nums[i] = 1
    else nums[i] = 2
  }
};
