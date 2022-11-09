export function findMedianSortedArrays(nums1, nums2) {
    //join arrays
    const joined = nums1.concat(nums2).sort((a, b) => a - b);
    const size = joined.length;
    if (size % 2 == 0) { //even
        const left_index = (size / 2) - 1;
        const right_index = (size / 2);
        return (joined[left_index] + joined[right_index]) / 2;
    }
    //odd
    const mid_index = ((size + 1) / 2) - 1;
    return joined[mid_index];
};