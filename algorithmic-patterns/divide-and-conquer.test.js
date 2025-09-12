import { divedeAndConquer } from './divide-and-conquer.js';

describe('Divide and Conquer Algorithm - binarySearch', () => {
  const { fn: binarySearch } = divedeAndConquer;

  describe('Basic functionality', () => {
    test('should find element in sorted array', () => {
      expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
      expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
      expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test('should return -1 when element not found', () => {
      expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
      expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
      expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
    });

    test('should work with single element array', () => {
      expect(binarySearch([42], 42)).toBe(0);
      expect(binarySearch([42], 43)).toBe(-1);
    });
  });

  describe('Edge cases', () => {
    test('should handle empty array', () => {
      expect(binarySearch([], 5)).toBe(-1);
    });

    test('should work with two element array', () => {
      expect(binarySearch([1, 5], 1)).toBe(0);
      expect(binarySearch([1, 5], 5)).toBe(1);
      expect(binarySearch([1, 5], 3)).toBe(-1);
    });

    test('should work with negative numbers', () => {
      expect(binarySearch([-10, -5, -1, 0, 3, 7], -5)).toBe(1);
      expect(binarySearch([-10, -5, -1, 0, 3, 7], 0)).toBe(3);
    });

    test('should work with duplicate elements', () => {
      expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeGreaterThanOrEqual(1);
      expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeLessThanOrEqual(3);
    });
  });

  describe('Large arrays', () => {
    test('should work efficiently with large sorted arrays', () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2);
      expect(binarySearch(largeArray, 1000)).toBe(500);
      expect(binarySearch(largeArray, 9999)).toBe(-1); // odd number not in array
    });

    test('should find first and last elements in large array', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i);
      expect(binarySearch(largeArray, 0)).toBe(0);
      expect(binarySearch(largeArray, 999)).toBe(999);
    });
  });

  describe('Performance characteristics', () => {
    test('should handle middle elements', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(binarySearch(array, 5)).toBe(4); // middle element
    });

    test('should work with floating point numbers', () => {
      const floatArray = [1.1, 2.2, 3.3, 4.4, 5.5];
      expect(binarySearch(floatArray, 3.3)).toBe(2);
      expect(binarySearch(floatArray, 3.4)).toBe(-1);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(divedeAndConquer.name).toBe("Divide and Conquer - Binary Search");
      expect(divedeAndConquer.whenToUse).toContain("Large datasets");
    });
  });
});