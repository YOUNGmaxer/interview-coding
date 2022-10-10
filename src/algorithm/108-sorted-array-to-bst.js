/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const len = nums.length;
  if (!len) return null;
  if (len === 1) return new TreeNode(nums[0]);

  const midIndex = Math.floor(len / 2);
  const node = new TreeNode(nums[midIndex]);
  node.left = sortedArrayToBST(nums.slice(0, midIndex));
  node.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return node;
};
