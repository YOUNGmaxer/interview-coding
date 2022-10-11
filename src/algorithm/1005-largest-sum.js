/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  let sum = 0;
  let i = 0, len = nums.length;

  while (i < len && k > 0) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
    i++
  }

  if (k % 2 === 1) nums[len - 1] *= -1;

  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  return sum;
};

console.log(largestSumAfterKNegations([4,2,3], 1));
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2));
console.log(largestSumAfterKNegations([-2,9,9,8,4], 5));
