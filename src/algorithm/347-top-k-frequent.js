/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const record = new Map();

  for (let n of nums) {
    record.set(n, (record.get(n) || 0) + 1);
  }

  return [...record.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map((item) => item[0]);
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
