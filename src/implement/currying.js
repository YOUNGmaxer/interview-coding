function curry(fn) {

  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function(...args2) {
        return curried(...args, ...args2)
      }
    }
  }
}

const sum = a => b => c => a + b + c
const sum2 = (a, b, c) => a + b + c

console.log(sum(1)(2)(3))

console.log(curry(sum)(1)(2)(3))
