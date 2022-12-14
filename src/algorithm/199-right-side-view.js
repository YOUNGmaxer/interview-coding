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
var rightSideView = function(root) {
  if (!root) return[];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i === len - 1) result.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};

function rightSideView_2(root) {
  const result = []

  function dfs(node, depth) {
    if (!node) return

    if (result.length === depth) result.push(node.val)

    depth++
    dfs(node.right, depth)
    dfs(node.left, depth)
  }

  dfs(root, 0)

  return result
}
