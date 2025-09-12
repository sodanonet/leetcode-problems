import { frequencyCounter } from './frequency-counter.js';

describe('Frequency Counter Algorithm - validAnagram', () => {
  const { fn: validAnagram } = frequencyCounter;

  describe('Basic functionality', () => {
    test('should identify valid anagrams', () => {
      expect(validAnagram('listen', 'silent')).toBe(true);
      expect(validAnagram('anagram', 'nagaram')).toBe(true);
      expect(validAnagram('evil', 'live')).toBe(true);
    });

    test('should reject invalid anagrams', () => {
      expect(validAnagram('hello', 'world')).toBe(false);
      expect(validAnagram('listen', 'listing')).toBe(false);
      expect(validAnagram('python', 'java')).toBe(false);
    });

    test('should be case sensitive', () => {
      expect(validAnagram('Listen', 'silent')).toBe(false);
      expect(validAnagram('ANAGRAM', 'nagaram')).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('should handle empty strings', () => {
      expect(validAnagram('', '')).toBe(true);
    });

    test('should handle single characters', () => {
      expect(validAnagram('a', 'a')).toBe(true);
      expect(validAnagram('a', 'b')).toBe(false);
    });

    test('should handle strings of different lengths', () => {
      expect(validAnagram('abc', 'abcd')).toBe(false);
      expect(validAnagram('hello', 'hi')).toBe(false);
    });

    test('should handle strings with repeated characters', () => {
      expect(validAnagram('aab', 'aba')).toBe(true);
      expect(validAnagram('aabb', 'abab')).toBe(true);
      expect(validAnagram('aabbc', 'abcba')).toBe(true);
    });

    test('should handle strings with special characters', () => {
      expect(validAnagram('a!b@', '@b!a')).toBe(true);
      expect(validAnagram('123', '321')).toBe(true);
      expect(validAnagram('a b c', 'c a b')).toBe(true);
    });
  });

  describe('Performance cases', () => {
    test('should handle long strings efficiently', () => {
      const str1 = 'a'.repeat(1000) + 'b'.repeat(1000);
      const str2 = 'b'.repeat(1000) + 'a'.repeat(1000);
      expect(validAnagram(str1, str2)).toBe(true);
    });

    test('should handle complex anagrams', () => {
      expect(validAnagram('conversation', 'voices rant on')).toBe(false); // spaces differ
      expect(validAnagram('conversationalist', 'conservationalist')).toBe(true);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(frequencyCounter.name).toBe("Frequency Counter");
      expect(frequencyCounter.whenToUse).toContain("anagrams");
    });
  });
});