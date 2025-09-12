import { slidingWindow } from './sliding-window.js';

describe('Sliding Window Algorithm - maxSubArraySum', () => {
  const { fn: maxSubArraySum } = slidingWindow;

  describe('Basic functionality', () => {
    test('should find maximum sum of subarray with length k', () => {
      expect(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)).toBe(9); // [5, 1, 3]
    });

    test('should work with different window sizes', () => {
      expect(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39); // [4, 2, 10, 23]
      expect(maxSubArraySum([2, 3, 4, 1, 5], 2)).toBe(7); // [3, 4]
    });

    test('should handle window size of 1', () => {
      expect(maxSubArraySum([1, 3, 2, 6, -1, 4, 1, 8, 2], 1)).toBe(8);
    });
  });

  describe('Edge cases', () => {
    test('should handle array with all negative numbers', () => {
      expect(maxSubArraySum([-1, -3, -2, -5], 2)).toBe(-4); // [-1, -3]
    });

    test('should handle array with mixed positive and negative numbers', () => {
      expect(maxSubArraySum([-1, 2, -1, 2, -1], 3)).toBe(3); // [2, -1, 2]
    });

    test('should handle window size equal to array length', () => {
      expect(maxSubArraySum([1, 2, 3, 4, 5], 5)).toBe(15);
    });

    test('should handle array with zeros', () => {
      expect(maxSubArraySum([0, 0, 0, 1, 0], 3)).toBe(1); // [0, 1, 0]
    });

    test('should handle single element array with k=1', () => {
      expect(maxSubArraySum([42], 1)).toBe(42);
    });
  });

  describe('Large arrays', () => {
    test('should work efficiently with large arrays', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i % 10);
      const result = maxSubArraySum(largeArray, 5);
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThanOrEqual(0);
    });

    test('should handle large window sizes', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(maxSubArraySum(array, 8)).toBe(52); // [3,4,5,6,7,8,9,10]
    });
  });

  describe('Performance and consistency', () => {
    test('should return same result for arrays with same subsequences', () => {
      const result1 = maxSubArraySum([1, 2, 3, 4, 5], 3);
      const result2 = maxSubArraySum([0, 1, 2, 3, 4, 5, 0], 3);
      expect(result2).toBeGreaterThanOrEqual(result1);
    });

    test('should handle floating point numbers', () => {
      expect(maxSubArraySum([1.5, 2.3, 0.7, 4.1], 2)).toBeCloseTo(4.8);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(slidingWindow.name).toBe("Sliding Window");
      expect(slidingWindow.whenToUse).toContain("subarrays");
    });
  });
});