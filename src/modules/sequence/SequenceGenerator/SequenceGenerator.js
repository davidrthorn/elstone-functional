import { createNoteGenerator} from '../NoteGenerator/NoteGenerator'

const noteGen = createNoteGenerator({density: 1, range: ['c', 'D']})

const exceedsMaxConsecutive = (total, maxC) =>
    total.length >= maxC
    && total
        .substring(-maxC)
        .match(/([a-g])\1+$/i)

export const testGen = (maxConsecutive=3) => randoms => randoms.reduce((total, curr) =>
    total + (
        exceedsMaxConsecutive(total, maxConsecutive)
            ? 'z'
            : noteGen(curr)
        )
, '')
