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
 * @return {number[]}
 */
var findMode = function(root) {
  let result = [];
  let pre = root.val;
  let count = 0, maxCount = 1;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    if (pre === node.val) {
      count++;
    } else {
      count = 1;
    }
    pre = node.val;
    if (count === maxCount) {
      result.push(node.val);
    }
    if (count > maxCount) {
      maxCount = count;
      result = [node.val];
    }
    dfs(node.right);
  }

  dfs(root);

  return result;
};
