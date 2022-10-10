/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = [];

  for (let c of s) {
    if (!stack) stack.push(c);
    else {
      if (stack[stack.length - 1] === c) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }

  return stack.join('');
};

console.log(removeDuplicates('abbaca'));
