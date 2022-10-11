/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];
  const path = [];
  const len = s.length;

  if (len > 12 || len < 4) return result;

  function backtracking(start) {
    if (start === len && path.length === 4) {
      result.push(path.join('.'));
      return;
    }

    for (let i = start; i < len && i < start + 3; i++) {
      if (path.length >= 4) break;
      if (i > start && s[start] === '0') break;

      const item = s.slice(start, i+1);
      if (Number(item) > 255) break;

      path.push(item);
      backtracking(i+1);
      path.pop();
    }
  }

  backtracking(0);

  return result;
};

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('0000'));
