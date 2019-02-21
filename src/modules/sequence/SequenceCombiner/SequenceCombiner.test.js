import { removeDuplicates, combineSequences } from './SequenceCombiner'

test("removeDuplicates", () => {
    expect(removeDuplicates(['a', 'a', 'b', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
    expect(removeDuplicates(['a', '', '', ' ', ' ', 'd'])).toEqual(['a', '', ' ', 'd'])
    expect(removeDuplicates([])).toEqual([])
})

test("combine correctly combines sequences", () => {
    expect(combineSequences(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cd]z')
    expect(combineSequences(['abzz', 'zzdz'])).toEqual('abdz')
})