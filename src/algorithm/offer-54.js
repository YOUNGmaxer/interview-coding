function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res
  function dfs(node) {
    if (!node) return
    dfs(node.right)
    if (k === 0) return 
    if (--k === 0) res = node.val
    dfs(node.left)
  }
  dfs(root)

  return res
};
