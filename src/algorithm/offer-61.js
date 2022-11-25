/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  nums.sort((a, b) => a - b)
  let joker = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) joker++
    else if (nums[i] === nums[i+1]) return false
  }

  return nums[4] - nums[joker] < 5
};

console.log(isStraight([1,2,3,4,5]))
