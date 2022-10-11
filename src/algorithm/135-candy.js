/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings.length;
  const candyArr = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i-1]) {
      candyArr[i] = candyArr[i-1] + 1;
    }
  }

  for (let i = len -2; i >= 0; i--) {
    if (ratings[i] > ratings[i+1]) {
      candyArr[i] = Math.max(candyArr[i], candyArr[i+1] + 1);
    }
  }

  return candyArr.reduce((acc, cur) => acc + cur, 0);
};

console.log(candy([1,0,2]))
console.log(candy([1,2,2]))
