import { dynamicProgramming } from './dynamic-programming.js';

describe('Dynamic Programming Algorithm - fibonacci', () => {
  const { fn: fib } = dynamicProgramming;

  describe('Basic functionality', () => {
    test('should calculate fibonacci numbers correctly', () => {
      expect(fib(0)).toBe(0);
      expect(fib(1)).toBe(1);
      expect(fib(2)).toBe(1);
      expect(fib(3)).toBe(2);
      expect(fib(4)).toBe(3);
      expect(fib(5)).toBe(5);
      expect(fib(6)).toBe(8);
      expect(fib(7)).toBe(13);
      expect(fib(8)).toBe(21);
      expect(fib(9)).toBe(34);
      expect(fib(10)).toBe(55);
    });

    test('should follow fibonacci sequence pattern', () => {
      for (let n = 2; n <= 15; n++) {
        expect(fib(n)).toBe(fib(n - 1) + fib(n - 2));
      }
    });
  });

  describe('Base cases', () => {
    test('should handle base case n = 0', () => {
      expect(fib(0)).toBe(0);
    });

    test('should handle base case n = 1', () => {
      expect(fib(1)).toBe(1);
    });

    test('should handle small fibonacci numbers', () => {
      expect(fib(2)).toBe(1);
      expect(fib(3)).toBe(2);
    });
  });

  describe('Memoization efficiency', () => {
    test('should efficiently calculate larger fibonacci numbers', () => {
      expect(fib(20)).toBe(6765);
      expect(fib(25)).toBe(75025);
      expect(fib(30)).toBe(832040);
    });

    test('should reuse memoized results', () => {
      // Test that memoization works by calling with the same input
      const result1 = fib(15);
      const result2 = fib(15);
      expect(result1).toBe(result2);
      expect(result1).toBe(610);
    });

    test('should work with separate memo objects', () => {
      const result1 = fib(12, {});
      const result2 = fib(12, {});
      expect(result1).toBe(result2);
      expect(result1).toBe(144);
    });
  });

  describe('Edge cases', () => {
    test('should handle negative numbers (following the function implementation)', () => {
      expect(fib(-1)).toBe(-1); // Based on n <= 1 returning n
      expect(fib(-5)).toBe(-5);
    });

    test('should handle custom memo initialization', () => {
      const customMemo = { 5: 5 }; // Pre-populate memo with correct value
      expect(fib(5, customMemo)).toBe(5);
      
      // Test that it builds upon the memo
      expect(fib(6, customMemo)).toBe(8);
    });

    test('should handle empty memo object', () => {
      expect(fib(8, {})).toBe(21);
    });
  });

  describe('Mathematical properties', () => {
    test('should maintain fibonacci ratio approximation for larger numbers', () => {
      // Golden ratio approximation: F(n+1)/F(n) approaches φ ≈ 1.618
      const n = 20;
      const ratio = fib(n + 1) / fib(n);
      expect(ratio).toBeCloseTo(1.618, 2);
    });

    test('should have even fibonacci numbers at every 3rd position', () => {
      // F(0)=0, F(3)=2, F(6)=8, F(9)=34, F(12)=144 are even
      expect(fib(0) % 2).toBe(0);
      expect(fib(3) % 2).toBe(0);
      expect(fib(6) % 2).toBe(0);
      expect(fib(9) % 2).toBe(0);
      expect(fib(12) % 2).toBe(0);
    });

    test('should satisfy fibonacci identities', () => {
      // F(n+m) = F(n)F(m+1) + F(n-1)F(m) for specific cases
      const n = 5, m = 3;
      const left = fib(n + m);
      const right = fib(n) * fib(m + 1) + fib(n - 1) * fib(m);
      expect(left).toBe(right);
    });
  });

  describe('Performance characteristics', () => {
    test('should calculate moderately large fibonacci numbers efficiently', () => {
      // These should run quickly with memoization
      expect(fib(35)).toBe(9227465);
      expect(fib(40)).toBe(102334155);
    });

    test('should handle repeated calculations efficiently', () => {
      // Multiple calls should benefit from memoization
      const memo = {};
      const start = Date.now();
      fib(35, memo);
      fib(34, memo);
      fib(33, memo);
      const end = Date.now();
      
      // Should complete quickly (less than 100ms on most systems)
      expect(end - start).toBeLessThan(100);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(dynamicProgramming.name).toBe("Dynamic Programming");
      expect(dynamicProgramming.whenToUse).toContain("Fibonacci");
    });

    test('should demonstrate optimal substructure', () => {
      // Each fibonacci number is optimally constructed from smaller subproblems
      const n = 10;
      expect(fib(n)).toBe(fib(n - 1) + fib(n - 2));
    });
  });
});