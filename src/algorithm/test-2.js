/**
 * 2. 给你一个由'1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
    此外，你可以假设该网格的四条边均被水包围。

    输入：grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    输出：3

    输入：grid = [
      [“0","1”,"0","0","0"],
      ["1”,"1","1","0","0"],
      [“0","1”,"0","0","0"],
      ["0","0","0","1","1"]
    ]
    输出：2
 */

function test(grid) {
  const rowSize = grid.length, colSize = grid[0].length
  let count = 0

  function checkNext(row, col) {
    if (row < 0 || col < 0 || row >= rowSize || col >= colSize) return
    if (grid[row][col] === '0') return

    grid[row][col] = '0'
    checkNext(row + 1, col)
    checkNext(row, col + 1)
    checkNext(row - 1, col)
    checkNext(row, col - 1)
  }

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === '0') continue

      count++
      checkNext(i, j)
    }
  }

  return count
}

console.log(test([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
