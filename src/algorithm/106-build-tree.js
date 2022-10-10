function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  const rootVal = postorder.pop();
  const rootIndexForIn = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);
  const newPostorder = postorder.slice(0, postorder.length - 1);
  root.left = buildTree(inorder.slice(0, rootIndexForIn), newPostorder.slice(0, rootIndexForIn));
  root.right = buildTree(inorder.slice(rootIndexForIn + 1, inorder.length), newPostorder.slice(rootIndexForIn));

  return root;
};

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));
