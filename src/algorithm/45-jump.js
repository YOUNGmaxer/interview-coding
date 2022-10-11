/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0;
  let curDistance = 0;
  let nextDistance = 0;

  if (nums.length === 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    nextDistance = Math.max(i + nums[i], nextDistance);

    if (i === curDistance) {
      curDistance = nextDistance;
      count++;

      if (curDistance >= nums.length - 1) break;
    }
  }

  return count;
};

console.log(jump([2,3,1,1,4]));
console.log(jump([0]));
console.log(jump([1]));
console.log(jump([1,2,3]));
