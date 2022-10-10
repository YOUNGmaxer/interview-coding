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
var isValidBST = function(root) {
  const arr = [];

  function buildTreeArr(node) {
    if (!node) return;

    buildTreeArr(node.left);
    arr.push(node.val);
    buildTreeArr(node.right);
  }

  buildTreeArr(root);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i-1]) return false;
  }

  return true;
};
