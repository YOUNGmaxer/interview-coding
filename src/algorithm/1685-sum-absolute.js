/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const len = nums.length
  const result = []
  let sum = nums.reduce((acc, cur) => acc + cur)
  let leftSum = 0
  
  for (let i = 0; i < len; i++) {
    result.push(sum - nums[i] * (len - i) + nums[i] * i - leftSum)
    leftSum += nums[i]
    sum -= nums[i]
  }

  return result
};

console.log(getSumAbsoluteDifferences([2,3,5]))
console.log(getSumAbsoluteDifferences([1,4,6,8,10]))
