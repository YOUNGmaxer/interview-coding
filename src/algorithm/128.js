/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let res = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curNum = num
      let count = 0

      while (numSet.has(curNum)) {
        curNum = curNum + 1
        count++
      }

      res = Math.max(res, count)
    }
  }

  return res
};

console.log(longestConsecutive([100,4,200,1,3,2]))
