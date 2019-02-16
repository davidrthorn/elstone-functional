import SequenceCombiner from './SequenceCombiner'

const sc = new SequenceCombiner()

test("_toColumns combines the right notes", () => {
    expect(sc._toColumns(["abc", "def", "ghi"])).toEqual(["adg", "beh", "cfi"])
})

test("_toColumns handles diffent group lengths", () => {
    expect(sc._toColumns(["a", "de", "hij"])).toEqual(["hda", "ie", "j"])
})

test("_toColumns handles arrays with empty strings", () => {
    expect(sc._toColumns(["a", "", "hij"])).toEqual(["ha", "i", "j"])
})

test("_toColumns handles empty arrays", () => {
    expect(sc._toColumns([])).toEqual([])
})

test("_combineNotes reduces strings of only rests to one rest", () => {
    expect(sc._combineNotes("zzz")).toBe("z")
})

test("_combineNotes throws an error when invalid characters are supplied", () => {
    expect(() => {
        sc._combineNotes("zxz")
    }).toThrowError("Unsupported characters: 'x'")
    expect(() => {
        sc._combineNotes("z z")
    }).toThrowError("Unsupported characters: ' '")
    expect(() => {
        sc._combineNotes("Ab y")
    }).toThrowError("Unsupported characters: ' ', 'y'")
})

test("_combineNotes adds brackets in the right way", () => {
    expect(sc._combineNotes("ab")).toBe("[ab]")
    expect(sc._combineNotes("Ab")).toBe("[Ab]")
    expect(sc._combineNotes("zb")).toBe("b")
    expect(sc._combineNotes("bcD")).toBe("[Dbc]")
})

test("_combineNotes removes copies of the same note", () => {
    expect(sc._combineNotes("ccz")).toBe("c")
})

test("_combineNotes returns empty string for empty string", () => {
    expect(sc._combineNotes("")).toBe("")
})

test("combine returns empty string when supplied with empty array", () => {
    expect(sc.combine([])).toEqual('')
})

test("combine correctly combines sequences", () => {
    expect(sc.combine(['abcz', 'dzdz', 'zzzz', 'ccc'])).toEqual('[acd][bc][cd]z')
    expect(sc.combine(['abzz', 'zzdz'])).toEqual('abdz')
})

test('_removeDuplicates removes duplicates', () => {
    expect(sc._removeDuplicates('ccc')).toBe('c')
    expect(sc._removeDuplicates('cac')).toBe('ca')
    expect(sc._removeDuplicates('CaD')).toBe('CaD')
})

test('_addBrackets adds brackets where appropriate', () => {
    expect(sc._addBrackets('CaD')).toBe('[CaD]')
    expect(sc._addBrackets('')).toBe('')
    expect(sc._addBrackets('c')).toBe('c')
})

test('_removeRests removes rests', () => {
    expect(sc._removeRests('czcz')).toBe('cc')
})