/**
 * Determines if two strings are anagrams of each other.
 *
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @returns Returns true if the strings are anagrams, otherwise false.
 */
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  const count: Record<string, number> = {};
  for (let char of str1) count[char] = (count[char] || 0) + 1;
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

interface AlgorithmicPattern {
  name: string;
  whenToUse: string;
  fn: (str1: string, str2: string) => boolean;
}

export const frequencyCounter: AlgorithmicPattern = {
  name: "Frequency Counter",
  whenToUse: "Comparing data, checking anagrams, counting occurrences.",
  fn: validAnagram,
};