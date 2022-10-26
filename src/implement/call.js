function call(target, ...args) {
  target = target || window
  const symbol = Symbol()
  target[symbol] = this
  const res = target[symbol](...args)
  delete target[symbol]
  return res
}

function apply(target, args) {
  target = target || window
  const symbol = Symbol()
  target[symbol] = this
  const res = target[symbol](...args)
  delete target[symbol]
  return res
}

function bind(target, ...args) {
  target = target || window
  const symbol = Symbol()
  target[symbol] = this

  return function(...innerArgs) {
    return target[symbol](...args, ...innerArgs)
  }
}
