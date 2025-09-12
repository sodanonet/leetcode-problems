import { longestPalindrome } from './problem.js';
import { cases } from './test-cases.js';

describe('Problem 5: Longest Palindromic Substring', () => {
  describe('LeetCode Test Cases', () => {
    test('Case 1: "babad" should return "bab"', () => {
      const input = cases[0].input;
      const expected = cases[0].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 2: "cbbd" should return "bb"', () => {
      const input = cases[1].input;
      const expected = cases[1].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 3: Complex string should return "abcba"', () => {
      const input = cases[2].input;
      const expected = cases[2].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 4: Single character "a" should return "a"', () => {
      const input = cases[3].input;
      const expected = cases[3].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 5: "ac" should return "a"', () => {
      const input = cases[4].input;
      const expected = cases[4].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 6: "acb" should return "a"', () => {
      const input = cases[5].input;
      const expected = cases[5].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 7: "ccc" should return "ccc"', () => {
      const input = cases[6].input;
      const expected = cases[6].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 8: "acccb" should return "ccc"', () => {
      const input = cases[7].input;
      const expected = cases[7].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 9: Complex string should return "c393c"', () => {
      const input = cases[8].input;
      const expected = cases[8].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 10: "aaaa" should return "aaaa"', () => {
      const input = cases[9].input;
      const expected = cases[9].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 11: Long string of same character should return full string', () => {
      const input = cases[10].input;
      const expected = cases[10].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 12: "aacabdkacaa" should return "aca"', () => {
      const input = cases[11].input;
      const expected = cases[11].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 13: "222020221" should return "2202022"', () => {
      const input = cases[12].input;
      const expected = cases[12].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });

    test('Case 14: Very long string should return "fklkf"', () => {
      const input = cases[13].input;
      const expected = cases[13].output;
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty string', () => {
      const result = longestPalindrome('');
      expect(result).toBe('');
    });

    test('should handle single character strings', () => {
      expect(longestPalindrome('x')).toBe('x');
      expect(longestPalindrome('z')).toBe('z');
    });

    test('should handle two character palindrome', () => {
      expect(longestPalindrome('aa')).toBe('aa');
      expect(longestPalindrome('bb')).toBe('bb');
    });

    test('should handle two different characters', () => {
      const result = longestPalindrome('ab');
      expect(['a', 'b']).toContain(result);
      expect(result.length).toBe(1);
    });

    test('should handle three character palindrome', () => {
      expect(longestPalindrome('aba')).toBe('aba');
      expect(longestPalindrome('cdc')).toBe('cdc');
    });
  });

  describe('Palindrome Types', () => {
    test('should handle odd-length palindromes', () => {
      expect(longestPalindrome('racecar')).toBe('racecar');
      expect(longestPalindrome('madam')).toBe('madam');
      expect(longestPalindrome('level')).toBe('level');
    });

    test('should handle even-length palindromes', () => {
      expect(longestPalindrome('noon')).toBe('noon');
      expect(longestPalindrome('deed')).toBe('deed');
      expect(longestPalindrome('abccba')).toBe('abccba');
    });

    test('should handle mixed case sensitivity', () => {
      // Algorithm should be case sensitive
      const result = longestPalindrome('Aab');
      expect(result).toBe('A');
    });

    test('should handle numeric palindromes', () => {
      expect(longestPalindrome('12321')).toBe('12321');
      expect(longestPalindrome('123454321')).toBe('123454321');
    });
  });

  describe('Complex Cases', () => {
    test('should find longest among multiple palindromes', () => {
      expect(longestPalindrome('abacabad')).toBe('abacaba'); // actual longest palindrome
      expect(longestPalindrome('raceacar')).toBe('aca');
    });

    test('should handle overlapping palindromes', () => {
      expect(longestPalindrome('aabaa')).toBe('aabaa');
      expect(longestPalindrome('abababa')).toBe('abababa');
    });

    test('should handle palindromes at string boundaries', () => {
      expect(longestPalindrome('abaxyz')).toBe('aba');
      expect(longestPalindrome('xyzaba')).toBe('aba');
    });
  });

  describe('Performance Cases', () => {
    test('should handle strings with no palindromes longer than 1', () => {
      const result = longestPalindrome('abcdefgh');
      expect(result.length).toBe(1);
      expect('abcdefgh').toContain(result);
    });

    test('should handle repetitive patterns', () => {
      expect(longestPalindrome('aaabaaab')).toBe('aaabaaa');
      expect(longestPalindrome('abababab')).toBe('abababa');
    });

    test('should respect maximum length limit', () => {
      // Algorithm limits input to 1000 characters
      const longString = 'a'.repeat(2000);
      const result = longestPalindrome(longString);
      expect(result.length).toBeLessThanOrEqual(1000);
    });
  });

  describe('Algorithm Properties', () => {
    test('should return a valid palindrome', () => {
      const testCases = ['babad', 'cbbd', 'racecar', 'hello'];
      testCases.forEach(testCase => {
        const result = longestPalindrome(testCase);
        const reversed = result.split('').reverse().join('');
        expect(result).toBe(reversed);
      });
    });

    test('should return substring of original input', () => {
      const input = 'testing123';
      const result = longestPalindrome(input);
      expect(input).toContain(result);
    });

    test('should return non-empty result for non-empty input', () => {
      expect(longestPalindrome('x').length).toBeGreaterThan(0);
      expect(longestPalindrome('hello').length).toBeGreaterThan(0);
    });
  });
});