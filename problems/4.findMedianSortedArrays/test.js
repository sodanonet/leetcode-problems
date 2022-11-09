import { test, run } from '../_common/test.js';
import { findMedianSortedArrays } from './problem.js';
import { cases } from './test-cases.js'

const testCases = cases.map((c, i) => (
    () => test(i+1, () => findMedianSortedArrays(c.input.n1, c.input.n2), c.output)
));

export const findMedianSortedArraysTest = () => run('findMedianSortedArrays/problem.js', testCases);