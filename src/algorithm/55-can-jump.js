/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxJumpPosition = 1;

  for (let i = 0; i < nums.length; i++) {
    // 如果达不到跳跃的位置，则退出
    if (maxJumpPosition < i + 1) return false;
  
    maxJumpPosition = Math.max(maxJumpPosition, i + nums[i] + 1);
    if (maxJumpPosition >= nums.length) return true;
  }

  return false;
};

console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,3,1,1,4]));
console.log(canJump([0]));
console.log(canJump([2,5,0,0]));
