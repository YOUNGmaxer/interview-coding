/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  const len = nums.length
  const map = new Map()

  for (let i = 0; i < len; i++) {
    const item = nums[i]
    const [start, end] = [item - valueDiff, item + valueDiff]
    for (let val = start; val <= end; val++) {
      if (map.has(val)) {
        const preIndex = map.get(val)
        if (i - preIndex <= indexDiff) return true
      }
    }
    map.set(item, i)
  }

  return false
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2))
