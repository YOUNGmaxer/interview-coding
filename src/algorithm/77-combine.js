/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];
  const path = [];

  function backtracking(start, end) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    if (start > end) return;

    for (let i = start; i <= end; i++) {
      path.push(i);
      backtracking(i+1, end);
      path.pop();
    }
  }

  backtracking(1, n);

  return result;
};

console.log(combine(4, 2));
