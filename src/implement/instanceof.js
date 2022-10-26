function myInstanceof(value, type) {
  return type.prototype.isPrototypeOf(value)
}

function myInstanceof_2(value, type) {
  if (value === null || value === undefined) return false

  // 基础类型均返回 false
  if (!['object', 'function'].includes(typeof value)) return false

  const origin = value.__proto__
  let next = type.prototype

  while (next) {
    if (origin === next) return true
    next = next.prototype
  }

  return false
}

console.log(myInstanceof(new String('hello'), String))
console.log(myInstanceof_2(new String('hello'), String))
console.log(myInstanceof_2(String('hello'), String))
