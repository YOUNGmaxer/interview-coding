/**
 *  问题5：二维数组螺旋输出，如输入：
    var arr =
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
    则输出：
    1，4，2，7，5，3，8，6，9
 */
function printMatrix(m) {
  const size = m.length
  const levelCount = 2 * (size - 1) + 1

  for (let i = 0; i < levelCount; i++) {
    let row = Math.min(i, size - 1), col = i - row
    while (row >= 0 && col < size) {
      console.log(m[row][col])
      row--
      col++
    }
  }
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
printMatrix(arr)
