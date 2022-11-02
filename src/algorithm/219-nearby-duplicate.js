/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const len = nums.length
  const map = new Map()

  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (map.has(item)) {
      const pre = map.get(item)
      if (i - pre <= k) return true
    }
    map.set(item, i)
  }

  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
