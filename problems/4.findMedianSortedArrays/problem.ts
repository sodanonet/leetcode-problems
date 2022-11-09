function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const joined: number[] = nums1.concat(nums2).sort((a: number, b: number) => a - b);
    const size: number = joined.length;
    if (size % 2 == 0) {
        const left_index: number = (size / 2) - 1;
        const right_index: number = (size / 2);
        return (joined[left_index] + joined[right_index]) / 2;
    }
    const mid_index: number = ((size + 1) / 2) - 1;
    return joined[mid_index];
};