function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// console.log(fib(10)); // 55

export const dynamicProgramming = {
  name: "Dynamic Programming",
  whenToUse:
    "Problems with overlapping subproblems and optimal substructure (e.g., Fibonacci).",
  fn: fib,
};
