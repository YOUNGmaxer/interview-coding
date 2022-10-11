/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = [];
  const path = [];
  const len = nums.length;

  function backtracking(start) {
    if (path.length >= 2) result.push([...path]);

    for (let i = start; i < len; i++) {
      const item = nums[i];
      const pathLen = path.length;
      // 非递增
      if (pathLen > 0 && path[pathLen - 1] > item) continue;
      // 当前层出现过
      if (i > start && nums.slice(start, i).includes(item)) continue;
      path.push(item);
      backtracking(i + 1);
      path.pop();
    }
  }

  backtracking(0);

  return result;
};

console.log(findSubsequences([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1]));
