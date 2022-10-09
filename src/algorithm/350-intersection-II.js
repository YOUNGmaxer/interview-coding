/**
 * 350. 两个数组的交集 II
 * @link https://leetcode.cn/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const record = new Map();
  const result = [];

  for (let num of nums1) {
    if (record.has(num)) {
      record.set(num, record.get(num) + 1);
    } else {
      record.set(num, 1);
    }
  }

  for (let num of nums2) {
    if (record.get(num) > 0) {
      result.push(num);
      record.set(num, record.get(num) - 1);
    }
  }

  return result;
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
