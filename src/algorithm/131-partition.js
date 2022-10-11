/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  const path = [];
  const len = s.length;

  function backtracking(start) {
    if (path.length && start === len) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= len; end++) {
      const item = s.slice(start, end);
      if (isValid(item)) {
        path.push(item);
        backtracking(end);
        path.pop();
      }
    }
  }

  backtracking(0);

  return result;
};

function isValid(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(partition('aab'));
