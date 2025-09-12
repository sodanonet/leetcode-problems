import { lengthOfLongestSubstring } from './problem.js';
import { cases } from './test-cases.js';

describe('Problem 3: Longest Substring Without Repeating Characters', () => {
  describe('LeetCode Test Cases', () => {
    test('Case 1: Long ASCII string should return 95', () => {
      const input = cases[0].input;
      const expected = cases[0].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 2: Very long repeating ASCII string should return 95', () => {
      const input = cases[1].input;
      const expected = cases[1].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 3: "abcabcbb" should return 3', () => {
      const input = cases[2].input;
      const expected = cases[2].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 4: "bbbbb" should return 1', () => {
      const input = cases[3].input;
      const expected = cases[3].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 5: "pwwkew" should return 3', () => {
      const input = cases[4].input;
      const expected = cases[4].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 6: "dvdf" should return 3', () => {
      const input = cases[5].input;
      const expected = cases[5].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 7: "anviaj" should return 5', () => {
      const input = cases[6].input;
      const expected = cases[6].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });

    test('Case 8: Long repeating character string should return 55', () => {
      const input = cases[7].input;
      const expected = cases[7].output;
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty string', () => {
      const result = lengthOfLongestSubstring('');
      expect(result).toBe('');
    });

    test('should handle single character', () => {
      const result = lengthOfLongestSubstring('a');
      expect(result).toBe(1);
    });

    test('should handle two different characters', () => {
      const result = lengthOfLongestSubstring('ab');
      expect(result).toBe(2);
    });

    test('should handle two same characters', () => {
      const result = lengthOfLongestSubstring('aa');
      expect(result).toBe(1);
    });

    test('should handle all unique characters', () => {
      const result = lengthOfLongestSubstring('abcdef');
      expect(result).toBe(6);
    });
  });

  describe('Common Patterns', () => {
    test('should handle repeating patterns', () => {
      expect(lengthOfLongestSubstring('abcabc')).toBe(3);
      expect(lengthOfLongestSubstring('abccba')).toBe(3);
    });

    test('should handle characters at different positions', () => {
      expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5); // "mzuxt"
      expect(lengthOfLongestSubstring('ohvhjdml')).toBe(6); // "ovhjdml"
    });

    test('should handle numeric characters', () => {
      expect(lengthOfLongestSubstring('012301')).toBe(4); // "0123"
      expect(lengthOfLongestSubstring('111')).toBe(1);
    });

    test('should handle special characters', () => {
      expect(lengthOfLongestSubstring('!@#$!@')).toBe(4); // "!@#$"
      expect(lengthOfLongestSubstring(' ')).toBe(1);
    });
  });

  describe('Performance Cases', () => {
    test('should handle medium length strings efficiently', () => {
      const mediumString = 'a'.repeat(50) + 'bcdefghijk' + 'l'.repeat(50);
      const result = lengthOfLongestSubstring(mediumString);
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThan(0);
    });

    test('should respect maximum ASCII character limit', () => {
      // Algorithm caps at 95 unique ASCII characters (128-33)
      const allAscii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(33 + i)).join('');
      const result = lengthOfLongestSubstring(allAscii);
      expect(result).toBe(95);
    });
  });

  describe('Algorithm Properties', () => {
    test('should handle sliding window correctly', () => {
      // Tests the sliding window approach with overlap
      expect(lengthOfLongestSubstring('abba')).toBe(2); // "ab" or "ba"
      expect(lengthOfLongestSubstring('abcdef')).toBe(6); // entire string
    });

    test('should find longest among multiple substrings', () => {
      expect(lengthOfLongestSubstring('a'+'bcdef'+'a'+'ghijk')).toBe(11); // "bcdefa" + "ghijk"
    });
  });
});