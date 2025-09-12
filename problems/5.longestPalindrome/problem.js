export function longestPalindrome(s) {
  if (!s) return "";
  const maxLength = 1000;
  const input = s.length > maxLength ? s.substring(0, maxLength) : s;
  const isPalindrome = (w) => w === w.split("").reverse().join("");
  let result = "";
  for (let leftIndex = 0; leftIndex < input.length; leftIndex++) {
    const left = input.substring(leftIndex, input.length);
    for (let rightIndex = left.length; rightIndex >= 0; rightIndex--) {
      const right = left.substring(0, rightIndex);
      if (!right.length) continue;
      result =
        isPalindrome(right) && right.length > result.length ? right : result;
    }
  }
  return result;
}
