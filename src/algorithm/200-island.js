/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  const rowSize = grid.length, colSize = grid[0].length

  function checkNext(row, col) {
    if (row >= rowSize || col >= colSize) return
    if (row < 0 || col < 0) return
    if (!Number(grid[row][col])) return

    grid[row][col] = 0
    checkNext(row + 1, col)
    checkNext(row, col + 1)
    checkNext(row - 1, col)
    checkNext(row, col - 1)
  }

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (!Number(grid[i][j])) continue

      count++
      checkNext(i, j)
    }
  }

  return count
};

const grid = [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]

console.log(numIslands(grid))
