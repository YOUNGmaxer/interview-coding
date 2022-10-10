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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    // 没有右节点
    if (!root.right) {
      return root.left;
    }

    const newRoot = root.right;
  
    // 右节点没有左节点
    if (!newRoot.left) {
      newRoot.left = root.left;
      return newRoot;
    }

    let leftBottomNode = newRoot.left;
    while (leftBottomNode.left) {
      leftBottomNode = leftBottomNode.left;
    }
    leftBottomNode.left = root.left;

    return newRoot;
  }
};
