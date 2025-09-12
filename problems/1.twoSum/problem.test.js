import { twoSum } from './problem.js';
import { cases } from './test-cases.js';

describe('Problem 1: Two Sum', () => {
  describe('LeetCode Test Cases', () => {
    test('Case 1: [2,7,11,15] with target 9 should return [0,1]', () => {
      const input = cases[0].input;
      const expected = cases[0].output;
      const result = twoSum(input.nums, input.target);
      expect(result).toEqual(expected);
    });

    test('Case 2: [3,2,4] with target 6 should return [1,2]', () => {
      const input = cases[1].input;
      const expected = cases[1].output;
      const result = twoSum(input.nums, input.target);
      expect(result).toEqual(expected);
    });

    test('Case 3: [3,3] with target 6 should return [0,1]', () => {
      const input = cases[2].input;
      const expected = cases[2].output;
      const result = twoSum(input.nums, input.target);
      expect(result).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    test('should handle minimum array length', () => {
      const result = twoSum([1, 2], 3);
      expect(result).toEqual([0, 1]);
    });

    test('should handle negative numbers', () => {
      const result = twoSum([-3, 4, 3, 90], 0);
      expect(result).toEqual([0, 2]);
    });

    test('should handle duplicate target value', () => {
      const result = twoSum([3, 3], 6);
      expect(result).toEqual([0, 1]);
    });

    test('should return empty array when no solution exists', () => {
      const result = twoSum([1, 2, 3], 10);
      expect(result).toEqual([]);
    });

    test('should handle large numbers', () => {
      const result = twoSum([1000000, 2000000, 3000000], 5000000);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('Algorithm Properties', () => {
    test('should always return indices in ascending order', () => {
      const result = twoSum([2, 7, 11, 15], 9);
      expect(result[0]).toBeLessThan(result[1]);
    });

    test('should not use the same element twice', () => {
      const result = twoSum([3, 2, 4], 6);
      expect(result).not.toEqual([0, 0]);
      expect(result).toEqual([1, 2]);
    });

    test('should find the first valid pair when multiple solutions exist', () => {
      const result = twoSum([3, 2, 3], 6);
      expect(result).toEqual([0, 2]);
    });
  });

  describe('Performance Characteristics', () => {
    test('should handle arrays with zeros', () => {
      const result = twoSum([0, 4, 3, 0], 0);
      expect(result).toEqual([0, 3]);
    });

    test('should work with single digit targets', () => {
      const result = twoSum([1, 2, 3, 4], 5);
      expect(result).toEqual([1, 2]);
    });
  });
});