/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;

  let slow = 1;
  for (let fast = 2; fast < nums.length; fast++) {
    // 与前两个比较，都相同则跳过
    if (nums[fast] === nums[slow] && nums[fast] === nums[slow-1]) continue;

    nums[++slow] = nums[fast];
  }

  return slow + 1;
};

console.log(removeDuplicates([1])); // 1
console.log(removeDuplicates([1,1])); // 2
console.log(removeDuplicates([1,2,2])); // 3
console.log(removeDuplicates([1,1,1,2,2,3])); // 5
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])); // 7
