function myNew(target, ...args) {
  const obj = Object.create(null)
  Object.setPrototypeOf(obj, target.prototype)
  const result = target.call(obj, ...args)
  return typeof result === 'object' && result !== null ? result : obj
}
