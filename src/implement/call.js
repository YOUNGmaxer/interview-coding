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

Function.prototype.bind = function bind(target, ...args) {
  target = target || globalThis
  const symbol = Symbol()
  target[symbol] = this

  return function(...innerArgs) {
    return target[symbol](...args, ...innerArgs)
  }
}

const a = {
  a: 1
}

const b = {
  a: 2
}

function fn() {
  console.log(this.a)
}

fn.bind(a).bind(b)()
