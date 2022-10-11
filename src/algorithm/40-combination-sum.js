/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  const path = [];

  candidates.sort((a, b) => a - b);

  function backtracking(sum, start) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const item = candidates[i];
      if (sum + item > target) break;
      if (i > start && item === candidates[i-1]) continue;

      path.push(item);
      sum += item;
      backtracking(sum, i + 1);
      sum -= item;
      path.pop();
    }
  }

  backtracking(0, 0);

  return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
