import { findMedianSortedArrays } from './problem.js';
import { cases } from './test-cases.js';

describe('Problem 4: Median of Two Sorted Arrays', () => {
  describe('LeetCode Test Cases', () => {
    test('Case 1: [1,3] and [2] should return 2.0', () => {
      const input = cases[0].input;
      const expected = cases[0].output;
      const result = findMedianSortedArrays(input.n1, input.n2);
      expect(result).toBeCloseTo(expected, 5);
    });

    test('Case 2: [1,2] and [3,4] should return 2.5', () => {
      const input = cases[1].input;
      const expected = cases[1].output;
      const result = findMedianSortedArrays(input.n1, input.n2);
      expect(result).toBeCloseTo(expected, 5);
    });

    test('Case 3: [3] and [-2,-1] should return -1.0', () => {
      const input = cases[2].input;
      const expected = cases[2].output;
      const result = findMedianSortedArrays(input.n1, input.n2);
      expect(result).toBeCloseTo(expected, 5);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty first array', () => {
      const result = findMedianSortedArrays([], [1, 2, 3]);
      expect(result).toBe(2);
    });

    test('should handle empty second array', () => {
      const result = findMedianSortedArrays([1, 2, 3], []);
      expect(result).toBe(2);
    });

    test('should handle single element arrays', () => {
      expect(findMedianSortedArrays([1], [2])).toBe(1.5);
      expect(findMedianSortedArrays([2], [1])).toBe(1.5);
    });

    test('should handle arrays with same elements', () => {
      expect(findMedianSortedArrays([1, 1], [1, 1])).toBe(1);
      expect(findMedianSortedArrays([2, 2, 2], [2, 2])).toBe(2);
    });

    test('should handle negative numbers', () => {
      expect(findMedianSortedArrays([-5, -2], [-3, -1])).toBe(-2.5);
      expect(findMedianSortedArrays([-1], [-2])).toBe(-1.5);
    });
  });

  describe('Different Size Arrays', () => {
    test('should handle arrays of different sizes', () => {
      expect(findMedianSortedArrays([1, 3], [2, 4, 5, 6])).toBe(3.5);
      expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6])).toBe(3.5);
    });

    test('should handle large size difference', () => {
      const result = findMedianSortedArrays([1], [2, 3, 4, 5, 6, 7]);
      expect(result).toBe(4);
    });

    test('should handle reverse size difference', () => {
      const result = findMedianSortedArrays([2, 3, 4, 5, 6, 7], [1]);
      expect(result).toBe(4);
    });
  });

  describe('Sorted Array Properties', () => {
    test('should work with already sorted arrays', () => {
      expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBe(3.5);
      expect(findMedianSortedArrays([1, 3, 5], [2, 4, 6])).toBe(3.5);
    });

    test('should handle overlapping ranges', () => {
      expect(findMedianSortedArrays([1, 2, 5, 6], [3, 4, 7, 8])).toBe(4.5);
    });

    test('should handle non-overlapping ranges', () => {
      expect(findMedianSortedArrays([1, 2, 3], [100, 101, 102])).toBe(51.5);
    });
  });

  describe('Precision and Data Types', () => {
    test('should handle floating point numbers', () => {
      expect(findMedianSortedArrays([1.5, 2.5], [1.0, 2.0])).toBeCloseTo(1.75, 2);
    });

    test('should return exact integers when appropriate', () => {
      expect(findMedianSortedArrays([1, 2, 3, 4, 5], [])).toBe(3);
      expect(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8])).toBe(5);
    });

    test('should handle large numbers', () => {
      const result = findMedianSortedArrays([1000000], [2000000]);
      expect(result).toBe(1500000);
    });
  });

  describe('Algorithm Properties', () => {
    test('should maintain median properties for even total length', () => {
      // Even total length should return average of two middle elements
      const nums1 = [1, 3];
      const nums2 = [2, 4];
      const result = findMedianSortedArrays(nums1, nums2);
      const merged = [1, 2, 3, 4]; // expected merge
      const expectedMedian = (merged[1] + merged[2]) / 2; // (2 + 3) / 2 = 2.5
      expect(result).toBe(expectedMedian);
    });

    test('should maintain median properties for odd total length', () => {
      // Odd total length should return middle element
      const nums1 = [1, 3];
      const nums2 = [2];
      const result = findMedianSortedArrays(nums1, nums2);
      const merged = [1, 2, 3]; // expected merge
      const expectedMedian = merged[1]; // middle element = 2
      expect(result).toBe(expectedMedian);
    });

    test('should handle zero values correctly', () => {
      expect(findMedianSortedArrays([0], [0])).toBe(0);
      expect(findMedianSortedArrays([-1, 0], [0, 1])).toBe(0);
    });
  });
});