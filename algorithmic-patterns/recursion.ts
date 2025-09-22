function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

interface AlgorithmicPattern {
  name: string;
  whenToUse: string;
  fn: (n: number) => number;
}

export const recursion: AlgorithmicPattern = {
  name: "Recursion",
  whenToUse:
    "Problems that can be broken into smaller, similar subproblems (factorials, tree traversals).",
  fn: factorial,
};