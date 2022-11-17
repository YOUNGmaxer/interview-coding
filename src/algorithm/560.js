/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map([[0, 1]])
  let prefixSum = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]

    if (map.get(prefixSum - k)) {
      count += map.get(prefixSum - k)
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
  }

  return count
};

console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([1,2,3], 3))
console.log(subarraySum([-1,-1,1], 0))
