/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  let start = 0, end = n - 1
  while (start < end) {
    for (let i = start; i < end; i++) {
      let temp = matrix[start][i];
      [matrix[i][end], temp] = [temp, matrix[i][end]];
      [matrix[end][end - (i - start)], temp] = [temp, matrix[end][end - (i - start)]];
      [matrix[end - (i - start)][start], temp] = [temp, matrix[end - (i - start)][start]];
      matrix[start][i] = temp
    }

    start++
    end--
  }

  return matrix
};

const m = [[1,2,3],[4,5,6],[7,8,9]]

// console.log(rotate(m))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
