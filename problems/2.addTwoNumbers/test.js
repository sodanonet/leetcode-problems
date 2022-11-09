import { test, run } from '../_common/test.js';
import { addTwoNumbers, getNumbers, createNodeList } from './problem.js';
import { cases } from './test-cases.js'

const wrapper = (c) =>  {
    const l1 = createNodeList(c.input.l1);
    const l2 = createNodeList(c.input.l2);
    const listNode = addTwoNumbers(l1, l2);
    return getNumbers(listNode);
};

const testCases = cases.map((c, i) => (
    () => test(i+1, () => wrapper(c), c.output)
));

export const addTwoNumbersTest = () => run('addTwoNumbers/problem.js', testCases);