/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0, end = nums.length - 1
  let count = 0

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      count = 1
      let right = mid + 1, left = mid - 1
      while (right <= end && nums[right] === target) {
        count++
        right++
      }
      while (left >= start && nums[left] === target) {
        count++
        left--
      }
      return count
    }
    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return count
};

console.log(search([5,7,7,8,8,10], 8))
console.log(search([1], 1))
