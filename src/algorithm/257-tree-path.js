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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = [];

  function dps(node, path) {
    if (!node) return;
    if (!node.left && !node.right) {
      path.push(node.val);
      result.push(path.join('->'));
      path.pop();
      return;
    }

    path.push(node.val);
    dps(node.left, path);
    dps(node.right, path);
    path.pop();
  }

  dps(root, []);
  return result;
};
