/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const path = [];

  candidates.sort((a, b) => a - b);

  function backtracking(sum, start) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      const item = candidates[i];
      // 超出目标的情况则减枝
      if (sum + item > target) break;
      sum += item;
      path.push(item);
      backtracking(sum, i);
      sum -= item;
      path.pop();
    }
  }

  backtracking(0, 0);

  return result;
};

console.log(combinationSum([2,3,6,7], 7));
