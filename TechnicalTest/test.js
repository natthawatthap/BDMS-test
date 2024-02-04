const { expect } = require('@jest/globals');
const { longestCommonPrefix } = require('./longestCommonPrefix');

describe('Longest Common Prefix', () => {
    it('Example 1', () => {
        const strs = ["flower", "flow", "flight"];
        expect(longestCommonPrefix(strs)).toBe("fl");
    });

    it('Example 2', () => {
        const strs = ["dog", "racecar", "car"];
        expect(longestCommonPrefix(strs)).toBe("");
    });

    it('Empty Array', () => {
        const strs = [];
        expect(longestCommonPrefix(strs)).toBe("");
    });

    it('Single String', () => {
        const strs = ["abc"];
        expect(longestCommonPrefix(strs)).toBe("abc");
    });

    it('No Common Prefix', () => {
        const strs = ["abc", "def", "ghi"];
        expect(longestCommonPrefix(strs)).toBe("");
    });
});