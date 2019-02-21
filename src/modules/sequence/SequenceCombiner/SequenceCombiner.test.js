import {transpose, removeDuplicates, combineSequences} from './SequenceCombiner'

test("transpose", () => {
    const input = [
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
    ]

    const want = [
        ['a', 'a', 'a', 'a', 'a'],
        ['b', 'b', 'b', 'b', 'b'],
        ['c', 'c', 'c', 'c', 'c'],
        ['d'],
    ]

    expect(transpose(input)).toEqual(want)
})

test("removeDuplicates", () => {
    expect(removeDuplicates(['a', 'a', 'b', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
    expect(removeDuplicates(['a', '', '', ' ', ' ', 'd'])).toEqual(['a', '', ' ', 'd'])
    expect(removeDuplicates([])).toEqual([])
})

test("combine correctly combines sequences", () => {
    expect(combineSequences(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cd]z')
    expect(combineSequences(['abzz', 'zzdz'])).toEqual('abdz')
})