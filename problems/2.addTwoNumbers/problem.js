export function getNumbers(list, numbers = []) {
    numbers.push(list.val);
    if (list.next) {
        numbers = getNumbers(list.next, numbers);
    }
    return numbers;
};

export function createNodeList(arr = []) {
    return arr.reverse().reduce((a, b) => {
        return { val: b, next: a };
    }, null);
}

export function addTwoNumbers(l1, l2) {  
   const alignNumbers = (left, right) => {
       return left.reduce((a, b, i) => {
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
  
   return createNodeList(finalList);
};