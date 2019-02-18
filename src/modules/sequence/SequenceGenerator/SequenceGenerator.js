import { generateNoteOtherThan, generateNote } from '../NoteGenerator/NoteGenerator'

const noteGen = generateNote(1)(['c', 'D'])

export const exceedsMaxConsecutive = (total, maxConsecutive) =>
    total.match(new RegExp(`([a-gz])\\1{${maxConsecutive},}$`, 'i')) != null

export const generateSequence = noteGen => (maxConsecutive=3) => randoms => randoms.reduce((total, curr, i) => {
    const note = noteGen(curr)
    return total + (
        exceedsMaxConsecutive(total + note, maxConsecutive)
            ? generateNoteOtherThan(note, noteGen, curr)
            : note
        )
}, '')
