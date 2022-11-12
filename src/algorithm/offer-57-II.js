/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  const result = []
  let left = 1, right = 2
  let sum = left + right

  while (left < right) {
    if (sum === target) {
      let offset = 0
      result.push(new Array(right - left + 1).fill(left).map((item) => {
        return item + offset++
      }))
    }
    if (sum < target) {
      right++
      sum += right
    } else {
      sum -= left
      left++
    }
  }

  return result
};

console.log(findContinuousSequence(9))
