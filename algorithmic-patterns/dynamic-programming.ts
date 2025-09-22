interface Memo {
  [key: number]: number;
}

function fib(num: number, memo: Memo = {}): number {
  if (num <= 1) return num;
  if (memo[num]) return memo[num];
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}

// console.log(fib(10)); // 55

export const dynamicProgramming = {
  name: 'Dynamic Programming',
  whenToUse:
    'Problems with overlapping subproblems and optimal substructure (e.g., Fibonacci).',
  fn: fib,
};
