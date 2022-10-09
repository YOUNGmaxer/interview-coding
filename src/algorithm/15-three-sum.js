/**
 * 15. 三数之和
 * @link https://leetcode.cn/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    const target = nums[i];
    if (target > 0) break;
    if (i > 0 && target === nums[i-1]) continue;

    let left = i + 1, right = len - 1;
    while (left < right) {
      const sum = nums[left] + nums[right] + target;
      if (sum === 0) {
        res.push([target, nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left+1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right-1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
