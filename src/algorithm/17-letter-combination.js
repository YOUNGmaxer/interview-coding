/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letterMap = {
    '2': 'abc',
    '3': 'edf',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const result = [];
  const path = [];
  const len = digits.length;

  if (!len) return result;

  function backtracking(path, start) {
    if (path.length === len) {
      result.push(path.join(''));
      return;
    }

    for (let i = start; i < len; i++) {
      const letters = letterMap[digits[i]];

      for (let j = 0; j < letters.length; j++) {
        path.push(letters[j]);
        backtracking(path, i+1);
        path.pop();
      }
    }
  }

  backtracking(path, 0);

  return result;
};
