/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const newNums = [...this.nums]
  const len = newNums.length
  for (let i = 0; i < len; i++) {
    const randomIndex = parseInt(Math.random() * (len - i) + i);
    [newNums[i], newNums[randomIndex]] = [newNums[randomIndex], newNums[i]]
  }
  return newNums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
