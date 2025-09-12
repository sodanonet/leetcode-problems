function _bfs(root) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

export const bfs = {
  name: "Breadth-First Search (BFS)",
  whenToUse: "Level-by-level traversal of trees or graphs.",
  fn: _bfs,
};
