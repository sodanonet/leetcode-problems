function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}

// console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

export const divedeAndConquer = {
  name: "Divide and Conquer - Binary Search",
  whenToUse:
    "Large datasets where you can break the problem into smaller parts (e.g., binary search).",
  fn: binarySearch,
};
