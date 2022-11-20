/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const exist = new Set()

  for (const n of nums) {
    if (exist.has(n)) return true

    exist.add(n)
  }

  return false
};

console.log(containsDuplicate([1,2,3,1]))
