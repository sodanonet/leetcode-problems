/**
 * Determines if there are any two numbers in a sorted array that add up to a specific sum.
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} sum - The target sum to find in the array.
 * @returns {boolean} Returns true if a pair with the given sum exists, otherwise false.
 */
function hasPairWithSum(arr, sum) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const total = arr[left] + arr[right];
    if (total === sum) return true;
    total > sum ? right-- : left++;
  }
  return false;
}

// console.log(hasPairWithSum([1, 2, 4, 6, 8], 10)); // true

export const twoPointers = {
  name: "Two Pointers",
  whenToUse:
    "Arrays or strings where you need to compare elements from different ends or find pairs.",
  fn: hasPairWithSum,
};
