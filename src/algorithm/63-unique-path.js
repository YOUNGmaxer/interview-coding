/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0]) {
      dp[i][0] = 0;
      break;
    } else {
      dp[i][0] = 1;
    }
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j]) {
      dp[0][j] = 0;
      break;
    } else {
      dp[0][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m-1][n-1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[1,0]]));
