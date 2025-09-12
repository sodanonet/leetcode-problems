/**
 * Finds the maximum sum of any contiguous subarray of length k within the given array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The length of the subarray window.
 * @returns {number} The maximum sum of any contiguous subarray of length k.
 */
function maxSubArraySum(arr, k) {
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

//console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9

export const slidingWindow = {
  name: "Sliding Window",
  whenToUse:
    "Problems involving subarrays/substrings, especially for max/min sums or lengths.",
  fn: maxSubArraySum,
};
