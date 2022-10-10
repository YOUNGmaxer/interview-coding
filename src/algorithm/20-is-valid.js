/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (Object.keys(map).includes(c)) {
      stack.push(map[c]);
    } else {
      if (stack.pop() !== c) return false;
    }
  }

  return !stack.length;
};

console.log(isValid('()[]{}'));
