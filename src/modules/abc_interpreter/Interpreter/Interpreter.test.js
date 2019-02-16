import AbcInterpreter from './Interpreter'

const i = new AbcInterpreter()

test('_sequenceToGroups splits a sequence into the appropriate groups', () => {
    expect(i._sequenceToGroups('aabccdeefggc', 3)).toBe('aab ccd eef ggc')
    expect(i._sequenceToGroups('aabccdeefggc', 4)).toBe('aabc cdee fggc')
})

test('_sequenceToGroups leaves a shorter final group when sequence length is not divisible by group length', () => {
    expect(i._sequenceToGroups('aabccdeefgg', 3)).toBe('aab ccd eef gg')
    expect(i._sequenceToGroups('aabccdeefgg', 4)).toBe('aabc cdee fgg')
})

test('_sequenceToGroups leaves sequence alone when group length is 0', () => {
    expect(i._sequenceToGroups('aabccdeefggg', 0)).toBe('aabccdeefggg')
})

test('_sequenceToGroups returns empty string for empty sequence', () => {
    expect(i._sequenceToGroups('', 4)).toBe('')
})

test('_sequenceToGroups handles bracketed notes', () => {
    expect(i._sequenceToGroups('A[bc]d[EFg]', 2)).toBe('A[bc] d[EFg]')
    expect(i._sequenceToGroups('A[bc]', 2)).toBe('A[bc]')
    expect(i._sequenceToGroups('[abc][def][ade][age]', 2)).toBe('[abc][def] [ade][age]')
    expect(i._sequenceToGroups('[abc][def][cab]', 2)).toBe('[abc][def] [cab]')
})

test('_groupToColumns handles no brackets', () => {
    expect(i._groupToColumns('ccc')).toEqual(['c', 'c', 'c'])
    expect(i._groupToColumns('AbD')).toEqual(['A', 'b', 'D'])
})

test('_groupToColumns handles brackets', () => {
    expect(i._groupToColumns('[AB]cd[EF]')).toEqual(['[AB]', 'c', 'd', '[EF]'])
    expect(i._groupToColumns('[AB][EF]')).toEqual(['[AB]', '[EF]'])
})

test('_groupToColumns returns empty array for empty string', () => {
    expect(i._groupToColumns('')).toEqual([])
})

test('_addNoteValuesToGroup adds eighth notes to appropriate triplet phrases when swung', () => {
    expect(i._addNoteValuesToGroup('AzB')).toBe('AB')
})

test('_addNoteValuesToGroup handles brackets', () => {
    expect(i._addNoteValuesToGroup('[Abc]zB')).toBe('[Abc]B')
    expect(i._addNoteValuesToGroup('zzz')).toBe('z2')
    expect(i._addNoteValuesToGroup('[cd]zz')).toBe('[cd]2')
})

test('_addNoteValuesToGroup leaves inappropriate groups alone', () => {
    expect(i._addNoteValuesToGroup('ccz')).toBe('ccz')
    expect(i._addNoteValuesToGroup('[cc]dz')).toBe('[cc]dz')
})

test('_addTripletBracketsToGroup adds brackets where appropriate', () => {
    expect(i._addTripletBracketsToGroup('ccz')).toBe('(3ccz')
    expect(i._addTripletBracketsToGroup('zAc')).toBe('(3zAc')
    expect(i._addTripletBracketsToGroup('zbz')).toBe('(3zbz')
    expect(i._addTripletBracketsToGroup('ccc')).toBe('(3ccc')
})

test('_addTripletBracketsToGroup handles simultaneous notes', () => {
    expect(i._addTripletBracketsToGroup('c[cA]z')).toBe('(3c[cA]z')
    expect(i._addTripletBracketsToGroup('z[Ab][Da]')).toBe('(3z[Ab][Da]')
    expect(i._addTripletBracketsToGroup('z[abc]z')).toBe('(3z[abc]z')
    expect(i._addTripletBracketsToGroup('[abc][abc][abc]')).toBe('(3[abc][abc][abc]')
})

test('_addTripletBracketsToGroup leaves groups alone that shouldnt be touched', () => {
    expect(i._addTripletBracketsToGroup('czc')).toBe('czc')
    expect(i._addTripletBracketsToGroup('cc')).toBe('cc')
    expect(i._addTripletBracketsToGroup('cczA')).toBe('cczA')
})

test('_applyFunctionToGroups successfully applies simple function', () => {
    const f = a => a + a
    expect(i._applyFunctionToGroups('a b c', f)).toBe('aa bb cc')
})

test('_groupsToBars adds bar separation every 4 spaces', () => {
    expect(i._groupsToBars('aaa bbb ccc ddd eee fff ggg aaa')).toBe('aaa bbb ccc ddd | eee fff ggg aaa')
    expect(i._groupsToBars('aaa bbb ccc ddd')).toBe('aaa bbb ccc ddd')
})

test('_groupsToBars pads final bars with rests where appropriate', () => {
    expect(i._groupsToBars('aaa bbb ccc ddd eee')).toBe('aaa bbb ccc ddd | eee z6')
})
