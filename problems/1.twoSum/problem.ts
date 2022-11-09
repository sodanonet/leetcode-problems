function twoSum(nums: number[], target: number): number[] {
    return nums.reduce((a, b, i) => {
        const first: number = i;
        const second: number = nums.findIndex((b2, i2) => b2 + b == target && i != i2);
        if (second > first) {
            a = [first, second];
        }
        return a;
    }, []);
};