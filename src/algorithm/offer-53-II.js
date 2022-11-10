/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0, right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === mid) left = mid + 1
    else right = mid - 1
  }

  return left
};

console.log(missingNumber([0,1,2,3,4,5,6,7,9])) // 8
console.log(missingNumber([0,1,2,3,4,5,6,7,8])) // 9
console.log(missingNumber([0])) // 1
console.log(missingNumber([1])) // 0
console.log(missingNumber([1, 2])) // 0
