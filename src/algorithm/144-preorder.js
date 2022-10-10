function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];

  function traversal(node) {
    if (!node) return;

    result.push(node.val);
    traversal(node.left);
    traversal(node.right);
  }

  traversal(root);
  return result;
};
