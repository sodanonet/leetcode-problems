function coinChange(coins: number[], amount: number): number {
  coins.sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return count;
}

interface AlgorithmicPattern {
  name: string;
  whenToUse: string;
  fn: (coins: number[], amount: number) => number;
}

export const greedyAlgorithm: AlgorithmicPattern = {
  name: "Greedy Algorithm",
  whenToUse:
    "Problems where making the locally optimal choice at each step leads to a global optimum.",
  fn: coinChange,
};