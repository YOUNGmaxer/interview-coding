/**
 * 904. 水果成篮
 * @link https://leetcode.cn/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const counter = new Map();
  const len = fruits.length;
  let left = 0;
  let right = 0;
  let maxNum = 0;

  while (left < len) {
    while (right < len) {
      if (counter.size <= 2) {
        const fruitType = fruits[right];
        counter.set(fruitType, counter.has(fruitType) ? counter.get(fruitType) + 1 : 1);
        right++;
      } else {
        break;
      }
    }

    maxNum = Math.max(maxNum, counter.size > 2 ? right - left - 1 : right - left);

    const leftFruit = fruits[left];
    const leftFruitNum = counter.get(leftFruit);
    if (leftFruitNum === 1) {
      counter.delete(leftFruit);
    } else {
      counter.set(leftFruit, leftFruitNum - 1);
    }
    left++;
  }

  return maxNum;
};

console.log(totalFruit([1,2,1])); // 3
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])); // 5
