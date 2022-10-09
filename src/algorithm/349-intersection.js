/**
 * 349. 两个数组的交集
 * @link https://leetcode.cn/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const record = new Map();
  const result = [];

  for (let num of nums1) {
    record.set(num, true);
  }

  for (let num of nums2) {
    if (record.has(num)) {
      result.push(num);
      record.delete(num);
    }
  }

  return result;
};

var intersection_II = function(nums1, nums2) {
  const resSet = new Set();
  const nums1Set = new Set(nums1);

  for (let num of nums2) {
    if (nums1Set.has(num)) {
      resSet.add(num);
    }
  }

  return Array.from(resSet);
}

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));

console.log(intersection_II([1,2,2,1], [2,2]));
console.log(intersection_II([4,9,5], [9,4,9,8,4]));
