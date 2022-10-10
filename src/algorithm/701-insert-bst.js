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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  const node = new TreeNode(val);
  if (!root) return node;

  if (root.val < val) {
    if (!root.right) root.right = node;
    else insertIntoBST(root.right, val);
  }
  else if (root.val > val) {
    if (!root.left) root.left = node;
    else insertIntoBST(root.left, val);
  }

  return root;
};
