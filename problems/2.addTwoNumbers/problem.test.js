import { addTwoNumbers, createNodeList, getNumbers } from './problem.js';
import { cases } from './test-cases.js';

describe('Problem 2: Add Two Numbers', () => {
  describe('Helper Functions', () => {
    test('createNodeList should create linked list from array', () => {
      const result = createNodeList([2, 4, 3]);
      expect(result.val).toBe(2);
      expect(result.next.val).toBe(4);
      expect(result.next.next.val).toBe(3);
      expect(result.next.next.next).toBe(null);
    });

    test('getNumbers should extract array from linked list', () => {
      const list = createNodeList([2, 4, 3]);
      const result = getNumbers(list);
      expect(result).toEqual([2, 4, 3]);
    });

    test('createNodeList should handle empty array', () => {
      const result = createNodeList([]);
      expect(result).toBe(null);
    });

    test('getNumbers should handle single node', () => {
      const list = createNodeList([5]);
      const result = getNumbers(list);
      expect(result).toEqual([5]);
    });
  });

  describe('LeetCode Test Cases', () => {
    test('Case 1: [2,4,3] + [5,6,4] = [7,0,8]', () => {
      const input = cases[0].input;
      const expected = cases[0].output;
      
      const l1 = createNodeList(input.l1);
      const l2 = createNodeList(input.l2);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      
      expect(resultArray).toEqual(expected);
    });

    test('Case 2: [0] + [0] = [0]', () => {
      const input = cases[1].input;
      const expected = cases[1].output;
      
      const l1 = createNodeList(input.l1);
      const l2 = createNodeList(input.l2);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      
      expect(resultArray).toEqual(expected);
    });

    test('Case 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]', () => {
      const input = cases[2].input;
      const expected = cases[2].output;
      
      const l1 = createNodeList(input.l1);
      const l2 = createNodeList(input.l2);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      
      expect(resultArray).toEqual(expected);
    });

    test('Case 4: Large number addition', () => {
      const input = cases[3].input;
      const expected = cases[3].output;
      
      const l1 = createNodeList(input.l1);
      const l2 = createNodeList(input.l2);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      
      expect(resultArray).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    test('should handle different length lists', () => {
      const l1 = createNodeList([9, 9]);
      const l2 = createNodeList([1]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([0, 0, 1]); // 99 + 1 = 100 -> [0,0,1]
    });

    test('should handle carry propagation', () => {
      const l1 = createNodeList([5]);
      const l2 = createNodeList([5]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([0, 1]); // 5 + 5 = 10 -> [0,1]
    });

    test('should handle single digits that sum to less than 10', () => {
      const l1 = createNodeList([2]);
      const l2 = createNodeList([3]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([5]);
    });

    test('should handle multiple carries', () => {
      const l1 = createNodeList([9, 9, 9]);
      const l2 = createNodeList([9, 9, 9]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([8, 9, 9, 1]); // 999 + 999 = 1998 -> [8,9,9,1]
    });
  });

  describe('Algorithm Properties', () => {
    test('should maintain reverse order representation', () => {
      // 243 + 564 = 807 represented as [3,4,2] + [4,6,5] = [7,0,8]
      const l1 = createNodeList([3, 4, 2]);
      const l2 = createNodeList([4, 6, 5]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([7, 0, 8]);
    });

    test('should handle zero in different positions', () => {
      const l1 = createNodeList([1, 0, 3]);
      const l2 = createNodeList([2, 0, 4]);
      const result = addTwoNumbers(l1, l2);
      const resultArray = getNumbers(result);
      expect(resultArray).toEqual([3, 0, 7]); // 301 + 402 = 703 -> [3,0,7]
    });
  });
});