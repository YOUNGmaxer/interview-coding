/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  const path = [];
  const len = nums.length;

  function backtracking(start) {
    for (let i = start; i < len; i++) {
      path.push(nums[i]);
      result.push([...path]);
      backtracking(i + 1);
      path.pop();
    }
  }

  backtracking(0);

  return result;
};

console.log(subsets([1,2,3]));
