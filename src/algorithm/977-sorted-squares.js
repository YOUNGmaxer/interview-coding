/**
 * 977. 有序数组的平方
 * @description 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @link https://leetcode.cn/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const len = nums.length;
  let left = 0, right = p = len - 1;
  const result = new Array(len);

  while (left <= right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];

    if (leftVal <= rightVal) {
      result[p--] = rightVal;
      right--;
    } else {
      result[p--] = leftVal;
      left++;
    }
  }

  return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]
