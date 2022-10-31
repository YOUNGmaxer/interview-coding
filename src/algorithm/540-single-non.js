/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums, start = 0, end = nums.length - 1) {
  const mid = Math.floor((start + end) / 2)
  const target = nums[mid]

  if (target !== nums[mid-1] && target !== nums[mid+1]) return target

  if (target === nums[mid-1]) {
    if ((mid + 1) % 2 === 0) {
      return singleNonDuplicate(nums, mid+1, end)
    } else {
      return singleNonDuplicate(nums, start, mid-1)
    }
  } else {
    if ((mid + 1) % 2 === 0) {
      return singleNonDuplicate(nums, start, mid-1)
    } else {
      return singleNonDuplicate(nums, mid+1, end)
    }
  }
};

console.log(singleNonDuplicate([1,1,2]))
