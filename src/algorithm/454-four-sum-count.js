/**
 * 454. 四数相加 II
 * @link https://leetcode.cn/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const record = new Map();
  let count = 0;

  for (let a of nums1) {
    for (let b of nums2) {
      const sum = a + b;
      record.set(sum, (record.get(sum) || 0) + 1);
    }
  }

  for (let c of nums3) {
    for (let d of nums4) {
      const sum = c + d;
      count += record.get(0 - sum) || 0;
    }
  }

  return count;
};
