/**
 * 18. 四数之和
 * @link https://leetcode.cn/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = [];
  const len = nums.length;

  if (len < 4) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j-1]) continue;

      let left = j + 1, right = len - 1;
      while (left < right) {
        const sum = nums[left] + nums[right] + nums[j] + nums[i];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left+1]) left++;
          while (left < right && nums[right] === nums[right-1]) right--;
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));
