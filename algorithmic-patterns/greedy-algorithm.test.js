import { greedyAlgorithm } from './greedy-algorithm.js';

describe('Greedy Algorithm - coinChange', () => {
  const { fn: coinChange } = greedyAlgorithm;

  describe('Basic functionality', () => {
    test('should find minimum coins for standard denominations', () => {
      expect(coinChange([25, 10, 5, 1], 37)).toBe(4); // 1*25 + 1*10 + 0*5 + 2*1
      expect(coinChange([25, 10, 5, 1], 30)).toBe(2); // 1*25 + 1*5
      expect(coinChange([25, 10, 5, 1], 41)).toBe(4); // 1*25 + 1*10 + 1*5 + 1*1
    });

    test('should handle exact matches', () => {
      expect(coinChange([25, 10, 5, 1], 25)).toBe(1);
      expect(coinChange([25, 10, 5, 1], 10)).toBe(1);
      expect(coinChange([25, 10, 5, 1], 5)).toBe(1);
      expect(coinChange([25, 10, 5, 1], 1)).toBe(1);
    });

    test('should handle zero amount', () => {
      expect(coinChange([25, 10, 5, 1], 0)).toBe(0);
    });
  });

  describe('Different coin systems', () => {
    test('should work with different coin denominations', () => {
      expect(coinChange([50, 20, 10, 5, 1], 67)).toBe(5); // 1*50 + 1*10 + 1*5 + 2*1
      expect(coinChange([100, 50, 25, 10, 5, 1], 187)).toBe(6); // 1*100 + 1*50 + 1*25 + 1*10 + 2*1
    });

    test('should work with limited coin types', () => {
      expect(coinChange([10, 5], 25)).toBe(3); // 2*10 + 1*5
      expect(coinChange([20, 10], 50)).toBe(3); // 2*20 + 1*10
    });

    test('should work with single coin type', () => {
      expect(coinChange([5], 25)).toBe(5);
      expect(coinChange([1], 10)).toBe(10);
    });
  });

  describe('Edge cases', () => {
    test('should handle unsorted coin arrays', () => {
      expect(coinChange([1, 5, 10, 25], 37)).toBe(4); // Should sort internally
      expect(coinChange([10, 1, 25, 5], 37)).toBe(4);
    });

    test('should handle coins with value 1', () => {
      expect(coinChange([1], 15)).toBe(15);
      expect(coinChange([5, 1], 7)).toBe(3); // 1*5 + 2*1
    });

    test('should handle large amounts', () => {
      expect(coinChange([25, 10, 5, 1], 200)).toBe(8); // 8*25
      expect(coinChange([100, 50, 25, 10, 5, 1], 999)).toBe(17); // 9*100 + 1*50 + 1*25 + 2*10 + 4*1
    });
  });

  describe('Non-standard scenarios', () => {
    test('should handle when exact change cannot be made with larger denominations', () => {
      // This tests the greedy nature - it may not always be optimal for all coin systems
      expect(coinChange([4, 3, 1], 6)).toBe(3); // Greedy: 1*4 + 2*1 = 3 coins (optimal would be 2*3 = 2 coins)
    });

    test('should work with decimal-like values (treating as integers)', () => {
      expect(coinChange([100, 25, 10, 5, 1], 137)).toBe(5); // 1*100 + 1*25 + 1*10 + 2*1
    });
  });

  describe('Performance characteristics', () => {
    test('should handle many coin types efficiently', () => {
      const manyCoins = [100, 50, 25, 20, 10, 5, 2, 1];
      expect(coinChange(manyCoins, 167)).toBe(5); // 1*100 + 1*50 + 0*25 + 0*20 + 1*10 + 1*5 + 1*2
    });

    test('should be consistent with repeated calls', () => {
      const coins = [25, 10, 5, 1];
      const amount = 67;
      const result1 = coinChange(coins, amount);
      const result2 = coinChange(coins, amount);
      expect(result1).toBe(result2);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(greedyAlgorithm.name).toBe("Greedy Algorithm");
      expect(greedyAlgorithm.whenToUse).toContain("locally optimal choice");
    });

    test('should always choose the largest coin first', () => {
      // This verifies the greedy approach - largest denominations are used first
      const result = coinChange([25, 10, 5, 1], 25);
      expect(result).toBe(1); // Uses 1*25 instead of 5*5 or 25*1
    });
  });
});