/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const getNumbers = (list: ListNode | null, numbers: number[] = []): number[] => {
        numbers.push(list.val);
        if (list.next) {
            numbers = getNumbers(list.next, numbers);
        }
        return numbers;
    };
    
    const alignNumbers = (left: number[], right: number[]): number[] => {
        return left.reduce((a: number[], b: number, i: number) => {
            const add = (a?.[i] !== undefined) ? a[i] : 0;
            const sum = ((right?.[i] !== undefined) ? right[i] + b : b) + add;
            if (sum >= 10) {
                const digits = Array.from(String(sum), Number);
                a[i] = digits[1];
                a.push(digits[0]);
            } else {
                a[i] = sum;
            }
            return a;            
        }, []);
    };

    const list1 = getNumbers(l1);
    const list2 = getNumbers(l2);
    const finalList = (list1.length >= list2.length) ? alignNumbers(list1, list2) : alignNumbers(list2, list1);
   
    return finalList.reverse().reduce((a: ListNode | null, b: number): ListNode | null => {
        a = new ListNode(b, a);
        return a;
    }, null);
};