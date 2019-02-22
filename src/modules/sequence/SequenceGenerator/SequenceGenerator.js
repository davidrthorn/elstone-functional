import { generateNoteOtherThan } from '../NoteGenerator/NoteGenerator'

export const exceedsMaxConsecutive = (total, maxConsecutive) =>
  total.match(new RegExp(`([a-gz])\\1{${maxConsecutive},}$`, 'i')) != null

export const generateSequence = noteGen => (maxConsecutive = 3) => randoms => randoms.reduce((total, curr, i) => {
  const note = noteGen(curr)
  return total + (
    exceedsMaxConsecutive(total + note, maxConsecutive)
      ? generateNoteOtherThan(note, noteGen, curr)
      : note
  )
}, '')
