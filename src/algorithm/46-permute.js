/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const path = [];
  const used = {};
  const len = nums.length;

  function backtracking() {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < len; i++) {
      const item = nums[i];
      if (used[item]) continue;
      path.push(item);
      used[item] = true;
      backtracking();
      used[item] = false;
      path.pop();
    }
  }

  backtracking();
  return result;
};

console.log(permute([1,2,3]));
