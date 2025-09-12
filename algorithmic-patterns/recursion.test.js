import { recursion } from './recursion.js';

describe('Recursion Algorithm - factorial', () => {
  const { fn: factorial } = recursion;

  describe('Basic functionality', () => {
    test('should calculate factorial of positive integers', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(4)).toBe(24);
      expect(factorial(3)).toBe(6);
      expect(factorial(2)).toBe(2);
    });

    test('should handle base cases correctly', () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(0)).toBe(1);
    });
  });

  describe('Edge cases', () => {
    test('should handle negative numbers', () => {
      expect(factorial(-1)).toBe(1);
      expect(factorial(-5)).toBe(1);
    });

    test('should handle larger factorials', () => {
      expect(factorial(6)).toBe(720);
      expect(factorial(7)).toBe(5040);
      expect(factorial(8)).toBe(40320);
    });

    test('should handle very small positive numbers', () => {
      expect(factorial(0.5)).toBe(1); // function converts to integer logic
    });
  });

  describe('Performance and limits', () => {
    test('should calculate moderately large factorials', () => {
      expect(factorial(10)).toBe(3628800);
      expect(factorial(12)).toBe(479001600);
    });

    test('should handle factorial of 15 (large but manageable)', () => {
      expect(factorial(15)).toBe(1307674368000);
    });
  });

  describe('Mathematical properties', () => {
    test('should satisfy factorial mathematical property n! = n * (n-1)!', () => {
      const n = 6;
      expect(factorial(n)).toBe(n * factorial(n - 1));
    });

    test('should grow exponentially', () => {
      expect(factorial(5)).toBeLessThan(factorial(6));
      expect(factorial(6)).toBeLessThan(factorial(7));
      expect(factorial(7) / factorial(6)).toBe(7);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(recursion.name).toBe("Recursion");
      expect(recursion.whenToUse).toContain("factorials");
    });
  });
});