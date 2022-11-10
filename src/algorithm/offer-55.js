/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0

  function dfs(node, depth) {
    if (!node) {
      max = Math.max(max, depth)
      return
    }
    dfs(node.right, depth + 1)
    dfs(node.left, depth + 1)
  }

  dfs(root, 0)

  return max
};
