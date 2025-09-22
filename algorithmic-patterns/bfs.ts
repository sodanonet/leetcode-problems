interface TreeNode {
  value: number | any;
  left: TreeNode | null;
  right: TreeNode | null;
}

function _bfs<T>(root: TreeNode): T[] {
  const queue: TreeNode[] = [root];
  const result: T[] = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node?.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

export const bfs = {
  name: 'Breadth-First Search (BFS)',
  whenToUse: 'Level-by-level traversal of trees or graphs.',
  fn: _bfs,
};
