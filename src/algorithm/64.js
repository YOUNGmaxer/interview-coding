/**
 * dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + nums[i][j]
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rowSize = grid.length, colSize = grid[0].length
  let curRow = 0, curCol = 0, sum = grid[curRow][curCol]

  const dp = new Array(rowSize).fill(0).map(() => new Array(colSize).fill(0))
  
  dp[0][0] = grid[0][0]
  for (let i = 1; i < rowSize; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for (let i = 1; i < colSize; i++) {
    dp[0][i] = dp[0][i-1] + grid[0][i]
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < colSize; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }

  return dp[rowSize - 1][colSize - 1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
