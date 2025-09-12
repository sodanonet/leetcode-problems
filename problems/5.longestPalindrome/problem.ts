// export function longestPalindrome(s: string): string {
//     if (!s) return "";
//     const maxLength: number = 1000;
//     const input: string = s.length > maxLength ? s.substring(0, maxLength) : s;
//     return [...input].reduce((leftWord: string, _, leftIndex: number) => {
//       const left: string = input.substring(leftIndex, s.length);
//         return [...left].reduce((rightWord: string, _, rightIndex: number) => {
//             const right: string = left.substring(0, rightIndex + 1);
//             if (right.length) {
//                 const isPalindrome: boolean = (right === right.split("").reverse().join(""));
//                 if (isPalindrome && right.length > rightWord.length) {
//                     return right;
//                 }
//             }
//             return rightWord;
//         }, leftWord);
//     }, '');
// }

export function longestPalindrome(s: string): string {
    if (!s) return "";
    const maxLength = 1000;
    const input = s.length > maxLength ? s.substring(0, maxLength) : s;
    const isPalindrome = (w: string): boolean => w === w.split("").reverse().join("");
    let result = "";
    for (let leftIndex = 0; leftIndex < input.length; leftIndex++) {
        const left = input.substring(leftIndex, input.length);
        for (let rightIndex = left.length; rightIndex >= 0; rightIndex--) {
            const right = left.substring(0, rightIndex);
            if (right.length <= 1) continue;
            result =
                isPalindrome(right) && right.length > result.length ? right : result;
        }
    }
    return result;
}