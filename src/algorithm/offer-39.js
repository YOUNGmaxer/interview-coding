/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const half = nums.length / 2
  const map = new Map()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (const [k, v] of map) {
    if (v >= half) return k
  }
};

/**
 * 抵消法
 */
function majorityElement_2(nums) {
  let refer = nums[0]
  let sum = 1

  for (let i = 1; i < nums.length; i++) {
    if (sum === 0) {
      refer = nums[i]
      sum = 1
      continue
    }
    if (nums[i] !== refer) {
      sum -= 1
    } else {
      sum += 1
    }
  }

  return refer
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
console.log(majorityElement_2([1, 2, 3, 2, 2, 2, 5, 4, 2]))
