export function lengthOfLongestSubstring(s) {
    const ascii_begin = 33;
    const ascii_end = 128;
    const max_length = ascii_end - ascii_begin;
    const updateSize = o => o.word.length > o.size ? o.word.length : o.size;
    const result =  s.split('').reduce((acc, char) => {
        if (acc.size == max_length) {
            return acc;
        }
        if (acc.word.includes(char)) {
            acc.word = `${acc.word.substr(acc.word.lastIndexOf(char) + 1)}${char}`;
        } else {
            acc.word += char;
            acc.size = updateSize(acc);
        }
        return acc;
    }, { size: '', word: '' });
    return result.size;
};