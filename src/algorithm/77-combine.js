/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];
  const path = [];

  function backtracking(start) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      // 剪枝优化
      if (path.length + n - i + 1 < k) break;
      path.push(i);
      backtracking(i+1);
      path.pop();
    }
  }

  backtracking(1);

  return result;
};

console.log(combine(4, 2));
