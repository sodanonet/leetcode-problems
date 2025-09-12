function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5)); // 120

export const recursion = {
  name: "Recursion",
  whenToUse:
    "Problems that can be broken into smaller, similar subproblems (factorials, tree traversals).",
  fn: factorial,
};
