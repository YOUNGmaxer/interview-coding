/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  let result = 0

  function backtracking(left) {
    if (!left.length) {
      result++
      return
    }

    let index = 0
    let cur = Number(left[index])
    while ((index === 0 && cur < 10) || (cur >= 10 && cur < 26)) {
      backtracking(left.substring(index+1))
      index++
      cur += left[index]
    }
  }

  backtracking(String(num))

  return result
};

console.log(translateNum(12258))
console.log(translateNum(506))
