/**
 * Finds the maximum sum of any contiguous subarray of length k within the given array.
 *
 * @param arr - The input array of numbers.
 * @param k - The length of the subarray window.
 * @returns The maximum sum of any contiguous subarray of length k.
 */
function maxSubArraySum(arr: number[], k: number): number {
  if (arr.length < k) return 0;

  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

interface AlgorithmicPattern {
  name: string;
  whenToUse: string;
  fn: (arr: number[], k: number) => number;
}

export const slidingWindow: AlgorithmicPattern = {
  name: "Sliding Window",
  whenToUse:
    "Problems involving subarrays/substrings, especially for max/min sums or lengths.",
  fn: maxSubArraySum,
};