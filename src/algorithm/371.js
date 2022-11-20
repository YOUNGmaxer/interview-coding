/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  const aVal = Math.abs(a), bVal = Math.abs(b)
  const aArr = new Array(aVal)
  const bArr = new Array(bVal)

  if (a * b < 0) {
    if (aVal > bVal) {
      const len = aArr.slice(bVal, aVal).length
      return a >= 0 ? len : -len
    } else if (bVal) {
      const len = bArr.slice(aVal, bVal).length
      return b >= 0 ? len : -len
    }
  } else if (a * b > 0) {
    const len = aArr.concat(bArr).length
    return a >= 0 ? len : -len
  } else {
    return a || b
  }
};

function getSum_2(a, b) {
  while (b) {
    const carry = (a & b) << 1
    a = a ^ b
    b = carry
  }

  return a
}

console.log(getSum_2(1, 2))
console.log(getSum_2(1, -2))
console.log(getSum_2(0, 17))
console.log(getSum_2(0, -1))
