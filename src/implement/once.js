function once(fn) {
  let result
  let invoked = false

  return function(...args) {
    if (invoked) return result

    invoked = true
    result = fn(...args)
    return result
  }
}

const f = once((a, b) => {
  console.log('computing..')
  return a * b
})

console.log(f(1, 3))
console.log(f(1, 3))
