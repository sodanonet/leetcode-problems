/**
 * Determines if there are any two numbers in a sorted array that add up to a specific sum.
 *
 * @param arr - A sorted array of numbers.
 * @param sum - The target sum to find in the array.
 * @returns Returns true if a pair with the given sum exists, otherwise false.
 */
function hasPairWithSum(arr: number[], sum: number): boolean {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const total = arr[left] + arr[right];
    if (total === sum) return true;
    total > sum ? right-- : left++;
  }
  return false;
}

interface AlgorithmicPattern {
  name: string;
  whenToUse: string;
  fn: (arr: number[], sum: number) => boolean;
}

export const twoPointers: AlgorithmicPattern = {
  name: "Two Pointers",
  whenToUse:
    "Arrays or strings where you need to compare elements from different ends or find pairs.",
  fn: hasPairWithSum,
};