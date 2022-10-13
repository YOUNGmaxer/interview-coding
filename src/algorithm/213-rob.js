/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];

  return Math.max(robRange(nums.slice(0, len-1)), robRange(nums.slice(1, len)))
};

function robRange(nums) {
  const len = nums.length;
  const dp = new Array(len + 1).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
  }

  return dp[len-1];
}

console.log(rob([1,2,3,1]));
