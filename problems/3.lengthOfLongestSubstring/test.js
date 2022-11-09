import { test, run } from '../_common/test.js';
import { lengthOfLongestSubstring } from './problem.js';
import { cases } from './test-cases.js'

const testCases = cases.map((c, i) => (
    () => test(i+1, () => lengthOfLongestSubstring(c.input), c.output, `length[${c.input.length}],`)
));

export const lengthOfLongestSubstringTest = () => run('lengthOfLongestSubstring/problem.js', testCases);