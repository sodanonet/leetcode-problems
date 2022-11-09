export function twoSum(nums, target) {
    return nums.reduce((a, b, i) => {
        const first = i;
        const second = nums.findIndex((b2, i2) => b2 + b == target && i != i2);
        if (second > first) {
            a = [first, second];
        }
        return a;
    }, []);
};