/**
 * Determines if two strings are anagrams of each other.
 *
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {boolean} Returns true if the strings are anagrams, otherwise false.
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let char of str1) count[char] = (count[char] || 0) + 1;
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

// console.log(validAnagram('listen', 'silent')); // true

export const frequencyCounter = {
  name: "Frequency Counter",
  whenToUse: "Comparing data, checking anagrams, counting occurrences.",
  fn: validAnagram,
};
