import {removeDuplicates, toColumns, toColStrings, transpose, combineSequences, combineNotes} from './SequenceCombinerOld'

test("combine correctly combines sequences", () => {
    expect(combineSequences(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cd]z')
    expect(combineSequences(['abzz', 'zzdz'])).toEqual('abdz')
})

test("combineNotes works", () => {
    expect(combineNotes("aaz")).toBe("a")
    expect(combineNotes("abc")).toBe("[abc]")
})

test('toColRecursive works with singles', () => {
    expect(toColStrings(['a', 'a', 'a'])).toEqual(['aaa'])
})

test('toColStrings works with multiples', () => {
    expect(toColStrings(['abc', 'abc', 'abc'])).toEqual(['aaa', 'bbb', 'ccc'])
})

test('toColStrings works with different length', () => {
    expect(toColStrings(['abc', 'abc', 'abcd'])).toEqual(['aaa', 'bbb', 'ccc', 'd'])
})

test("toColStrings handles arrays with empty strings", () => {
    expect(toColStrings(['', 'a', 'hij'])).toEqual(['ha', 'i', 'j'])
})
