import { generateNoteOtherThan, generateNote } from '../NoteGenerator/NoteGenerator'

const noteGen = generateNote(1)(['c', 'D'])

export const exceedsMaxConsecutive = (total, maxConsecutive) =>
    total.match(new RegExp(`([a-gz])\\1{${maxConsecutive - 1},}$`, 'i')) != null

export const generateSequence = (maxConsecutive=3) => randoms => randoms.reduce((total, curr, i) => {
    console.log(exceedsMaxConsecutive(total, maxConsecutive) + ' ' + generateNoteOtherThan(noteGen(curr), noteGen, curr) + ' ' + total)
    return total + (
        exceedsMaxConsecutive(total, maxConsecutive)
            ? generateNoteOtherThan(noteGen(curr), noteGen, curr)
            : noteGen(curr)
        )
}, '')
