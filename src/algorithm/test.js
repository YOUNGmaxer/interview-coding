// 判断有序数组A是否为有序数组B的子数组(需连续)
function fn(a, b) {
  const aLen = a.length
  const bLen = b.length
  if (aLen > bLen) return false

  let aLeft = 0, bLeft = 0, bRight = bLen - 1
  let aStart = a[0]
  let point = -1

  while (bLeft <= bRight) {
    const mid = Math.floor((bLeft + bRight) / 2)
    const val = b[mid]
    if (val === aStart) {
      point = mid
      break;
    }
    if (val < aStart) {
      bLeft = mid + 1
    } else {
      bRight = mid - 1
    }
  }

  if (point === -1) return false

  while (point < bLen && aLeft < aLen) {
    if (aLeft === 0 && b[point] > a[aLeft]) return false

    if (b[point] === a[aLeft]) {
      if (aLeft === aLen - 1) return true
      point++
      aLeft++
    } else {
      aLeft = 0
      point++
    }
  }

  return false
}

console.log(fn([2,3,4], [1,2,2,3,4,5]))
console.log(fn([2,3,4], [1,2,2,4,5]))

// [1,2,2,3,4,5] - [2,3,4] => true
