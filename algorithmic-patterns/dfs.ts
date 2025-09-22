interface TreeNode {
  value: number | any;
  left: TreeNode | null;
  right: TreeNode | null;
}

function _dfs<T>(node: TreeNode | null | undefined): T[] {
  let output: T[] = [];
  if (!node) return output;
  output = [...output, node.value, ..._dfs(node.left), ..._dfs(node.right)];
  return output;
}

export const dfs = {
  name: 'Depth-First Search (DFS)',
  whenToUse: 'Explore as far as possible before backtracking (trees, graphs).',
  fn: _dfs,
};
