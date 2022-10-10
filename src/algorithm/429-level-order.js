/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const result = []
  const queue = [root]

  while (queue.length) {
    const level = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      level.push(node.val)
      node.children && node.children.forEach(item => {
        item && queue.push(item)
      })
    }

    result.push(level)
  }

  return result
}
