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
 * @return {number}
 */
var rob = function(root) {
  function _rob(root) {
    if (!root) return [0, 0];
    const left = _rob(root.left);
    const right = _rob(root.right);

    // 偷父
    const res1 = root.val + left[0] + right[0];
    // 不偷父
    const res2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [res2, res1];
  }

  const result = _rob(root);
  return Math.max(result[0], result[1]);
};

