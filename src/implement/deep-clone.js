function isObject(o) {
  return (typeof o === 'object' || typeof o === 'function') && o !== null
}

function getType(o) {
  return /\s(.*)]/.exec(Object.prototype.toString.call(o))?.[1]
}

const cloneHandlers = {
  'Object': cloneObjectOrArray,
  'Array': cloneObjectOrArray,
  'Map': cloneMap,
  'Set': cloneSet,
  'Symbol': cloneSymbol,
  'Function': cloneFunction
}

function createEmptyTarget(target) {
  return new target.constructor()
}

function cloneObjectOrArray(target, cloned) {
  const clonedTarget = createEmptyTarget(target)
  for (const key in target) {
    clonedTarget[key] = deepClone(target[key], cloned)
  }
  return clonedTarget
}

function cloneMap(target, cloned) {
  const clonedTarget = createEmptyTarget(target)
  for (const [key, value] of target) {
    clonedTarget.set(deepClone(key, cloned), deepClone(value, cloned))
  }
  return clonedTarget
}

function cloneSet(target, cloned) {
  const clonedTarget = createEmptyTarget(target)
  for (const item of target) {
    clonedTarget.add(deepClone(item, cloned))
  }
  return clonedTarget
}

function cloneSymbol(target) {
  return Symbol.for(target.description)
}

function cloneFunction(target) {
  return target.bind(null)
}

function deepClone(target, cloned = new WeakMap()) {
  if (!isObject(target)) return target

  if (cloned.has(target)) return cloned.get(target)

  const type = getType(target)
  const handler = cloneHandlers[type]
  const result = handler(target, cloned)
  cloned.set(target, result)
  return result
}

const obj = {
  'a': 1,
  'b': [1, 2, 3],
  'c': null,
  'd': undefined,
  'e': false,
  'f': { test: 'test' },
  'g': new Map([[{ 'map': 'map' }, [1, 2]]]),
  'h': new Set([1, 2, 3]),
  'i': Symbol('i'),
  'j': () => { console.log('hello') }
}

const a = deepClone(obj)
console.log(a)
