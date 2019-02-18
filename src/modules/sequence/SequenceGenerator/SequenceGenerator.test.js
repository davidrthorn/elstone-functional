import * as NG from '../NoteGenerator/NoteGenerator'
import { generateSequence, exceedsMaxConsecutive } from './SequenceGenerator'

test('Returns a sequence containing no more than the specified maximum consecutive notes', () => {
    const random = Array(8).fill(0.4)
    const noteGen = NG.generateNote(1)(['c', 'D'])

    expect(generateSequence(noteGen)(3)(random)).toBe('cccDcccD')
})

test('Returns true if sequence ends with 3 consecutive notes', () => {
    expect(exceedsMaxConsecutive('cccc', 3)).toBe(true)
    expect(exceedsMaxConsecutive('Dcccc', 3)).toBe(true)
})

test('Returns false if sequence does not end with 3 consecutive notes ', () => {
    expect(exceedsMaxConsecutive('', 3)).toBe(false)
    expect(exceedsMaxConsecutive('dc', 3)).toBe(false)
    expect(exceedsMaxConsecutive('ddcc', 3)).toBe(false)
    expect(exceedsMaxConsecutive('DcccD', 3)).toBe(false)
})