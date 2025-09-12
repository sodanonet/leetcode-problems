import { twoPointers } from './two-pointers.js';

describe('Two Pointers Algorithm - hasPairWithSum', () => {
  const { fn: hasPairWithSum } = twoPointers;

  describe('Basic functionality', () => {
    test('should find pair that sums to target in sorted array', () => {
      expect(hasPairWithSum([1, 2, 4, 6, 8], 10)).toBe(true);
    });

    test('should return false when no pair sums to target', () => {
      expect(hasPairWithSum([1, 2, 4, 6, 8], 15)).toBe(false);
    });

    test('should work with negative numbers', () => {
      expect(hasPairWithSum([-4, -1, 0, 3, 10], -1)).toBe(true);
      expect(hasPairWithSum([-4, -1, 0, 3, 10], 13)).toBe(true);
    });
  });

  describe('Edge cases', () => {
    test('should handle empty array', () => {
      expect(hasPairWithSum([], 5)).toBe(false);
    });

    test('should handle single element array', () => {
      expect(hasPairWithSum([5], 5)).toBe(false);
    });

    test('should handle two element array that sums to target', () => {
      expect(hasPairWithSum([2, 3], 5)).toBe(true);
    });

    test('should handle two element array that does not sum to target', () => {
      expect(hasPairWithSum([2, 3], 6)).toBe(false);
    });

    test('should handle array with duplicate numbers', () => {
      expect(hasPairWithSum([1, 1, 2, 3, 4], 2)).toBe(true);
      expect(hasPairWithSum([2, 2, 2, 2], 4)).toBe(true);
    });

    test('should handle zero as target sum', () => {
      expect(hasPairWithSum([-3, -1, 0, 1, 3], 0)).toBe(true);
      expect(hasPairWithSum([1, 2, 3, 4], 0)).toBe(false);
    });
  });

  describe('Large arrays', () => {
    test('should work with large sorted arrays', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(hasPairWithSum(largeArray, 1999)).toBe(true); // 999 + 1000
      expect(hasPairWithSum(largeArray, 2001)).toBe(false);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(twoPointers.name).toBe("Two Pointers");
      expect(twoPointers.whenToUse).toContain("Arrays or strings");
    });
  });
});