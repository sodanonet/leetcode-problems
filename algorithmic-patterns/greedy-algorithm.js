function coinChange(coins, amount) {
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

// console.log(coinChange([25, 10, 5, 1], 37)); // 4

export const greedyAlgorithm = {
  name: "Greedy Algorithm",
  whenToUse:
    "Problems where making the locally optimal choice at each step leads to a global optimum.",
  fn: coinChange,
};
