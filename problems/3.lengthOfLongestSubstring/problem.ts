interface Output {
    size: number;
    word: string;
}

function lengthOfLongestSubstring(s: string = ''): number {
    const ascii_begin: number = 33; // AscII first character code 'space'
    const ascii_end: number = 128;// AscII last character code 'tilde'
    const max_length: number = ascii_end - ascii_begin;
    const updateSize = (o: Output): number => o.word.length > o.size ? o.word.length : o.size;
    const result: Output =  s.split('').reduce((acc: Output, char: string) => {
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
    }, <Output>{ size: 0, word: '' });
    return result.size;
};