/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;

  const value = root.val;
  if (value === p.val || value === q.val) return root;
  
  if (value === Math.min(value, p.val, q.val)) return lowestCommonAncestor(root.right, p, q);
  else if (value === Math.max(value, p.val, q.val)) return lowestCommonAncestor(root.left, p, q);

  return root;
};
