import { test, run } from '../_common/test.js';
import { twoSum } from './problem.js';
import { cases } from './test-cases.js'

const testCases = cases.map((c, i) => (
    () => test(i+1, () => twoSum(c.input.nums, c.input.target), c.output, `length[${c.input.length}],`)
));

export const twoSumTest = () => run('twoSum/problem.js', testCases);