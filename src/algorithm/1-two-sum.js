/**
 * 1. 两数之和
 * @link https://leetcode.cn/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const aimVal = target - nums[i];
    if (map.has(aimVal)) return [i, map.get(aimVal)];
    map.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9));
