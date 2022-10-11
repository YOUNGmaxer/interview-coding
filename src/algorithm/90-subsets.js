/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = [[]];
  const path = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);

  function backtracking(start) {
    for (let i = start; i < len; i++) {
      const item = nums[i];
      if (i > start && item === nums[i-1]) continue;

      path.push(item);
      result.push([...path]);
      backtracking(i + 1);
      path.pop();
    }
  }

  backtracking(0);

  return result;
};

console.log(subsetsWithDup([4,4,4,1,4]));
