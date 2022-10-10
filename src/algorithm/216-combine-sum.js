/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  const path = [];

  function backtracking(target, start) {
    if (path.length === k) {
      if (target === 0) {
        result.push([...path]);
      }
      return;
    }

    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtracking(target-i, i+1);
      path.pop();
    }
  }

  backtracking(n, 1);

  return result;
};
