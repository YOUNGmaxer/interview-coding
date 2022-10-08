/**
 * 59. 螺旋矩阵 II
 * @link https://leetcode.cn/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let startX = 0, startY = 0;
  let loop = Math.floor(n / 2);
  let count = 1;
  let offset = 1;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    const end = n - offset;
    for (let i = startX; i < end; i++) {
      result[startX][i] = count++;
    }

    for (let i = startY; i < end; i++) {
      result[i][end] = count++;
    }

    for (let i = end; i > startX; i--) {
      result[end][i] = count++;
    }

    for (let i = end; i > startY; i--) {
      result[i][startY] = count++;
    }

    startX++;
    startY++;
    offset++;
  }

  if (n % 2 === 1) {
    let mid = Math.floor(n / 2);
    result[mid][mid] = count;
  }

  return result;
};

console.log(generateMatrix(3));
console.log(generateMatrix(4));
