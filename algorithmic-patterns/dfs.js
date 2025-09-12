function _dfs(node) {
  if (!node) return;
  console.log(node.value);
  _dfs(node.left);
  _dfs(node.right);
}

export const dfs = {
  name: "Depth-First Search (DFS)",
  whenToUse: "Explore as far as possible before backtracking (trees, graphs).",
  fn: _dfs,
};
