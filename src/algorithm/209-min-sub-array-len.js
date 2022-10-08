/**
 * 209. 长度最小的子数组
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
 * @link https://leetcode.cn/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const len = nums.length;
  let left = 0, right = 0;
  let minLen = Infinity;
  let sum = nums[left];

  while (left < len) {
    while (right < len) {
      if (sum < target) {
        right++;
        sum += nums[right];
      } else {
        minLen = Math.min(right - left + 1, minLen);
        break;
      }
    }
    sum -= nums[left];
    left++;
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log(minSubArrayLen(4, [1,4,4])); // 1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // 1
