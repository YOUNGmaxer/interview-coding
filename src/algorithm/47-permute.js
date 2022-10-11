/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];
  const path = [];
  const len = nums.length;
  const used = {};
  const count = {};

  for (let item of nums) {
    count[item] = (count[item] || 0) + 1;
  }

  function backtracking() {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    const innerUsed = {};

    for (let num of nums) {
      if (used[num] === count[num]) continue;
      if (innerUsed[num]) continue;
      path.push(num);
      innerUsed[num] = true;
      used[num] = (used[num] || 0) + 1;
      backtracking();
      used[num] -= 1;
      path.pop();
    }
  }

  backtracking();
  return result;
};

console.log(permuteUnique([1,1,2]));
