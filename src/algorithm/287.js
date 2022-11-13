/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let left = 0, right = nums.length - 1

  nums.sort((a, b) => a - b)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const cur = nums[mid]

    if (cur < mid + 1) {
      right = mid - 1
    } else if (cur === mid + 1) {
      left = mid + 1
    }
  }

  return nums[left]
};

console.log(findDuplicate([1,3,4,2,2]))
