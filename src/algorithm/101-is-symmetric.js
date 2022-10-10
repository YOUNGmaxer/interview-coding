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
var isSymmetric = function(root) {
  
  function compareTree(left, right) {
    if (!left && !right) return true;
    if (!left && right || !right && left) return false;
    if (left.val !== right.val) return false;

    return compareTree(left.left, right.right) && compareTree(left.right, right.left);
  }

  if (!root) return true;

  return compareTree(root.left, root.right);
};
