/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const map = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => a / b | 0]
  ]);

  for (let token of tokens) {
    if (!map.has(token)) {
      stack.push(token);
      continue;
    }

    const b = Number(stack.pop());
    const a = Number(stack.pop());
    stack.push(map.get(token)(a, b));
  }

  return stack.pop();
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
