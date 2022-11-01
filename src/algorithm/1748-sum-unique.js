/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let sum = 0
  const map = new Map()
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (map.get(nums[i]) === 0) continue
    if (map.get(nums[i]) === 1) {
      sum -= nums[i]
      map.set(nums[i], 0)
    } else {
      sum += nums[i]
      map.set(nums[i], 1)
    }
  }

  return sum
};

console.log(sumOfUnique([1,2,3,2]))
console.log(sumOfUnique([1,1,1,1,1]))
