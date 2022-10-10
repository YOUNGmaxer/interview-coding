/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return getHeight(root) === -1 ? false : true;
};

function getHeight(node) {
  if (!node) return 0;

  const leftHeight = getHeight(node.left);
  if (leftHeight === -1) return -1;
  const rightHeight = getHeight(node.right);
  if (rightHeight === -1) return -1;

  return Math.abs(leftHeight - rightHeight) > 1 ? -1 : 1 + Math.max(leftHeight, rightHeight);
}
